import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { noSpecialCharactersValidator } from 'src/app/validators/no-special-characters.validator';

@Component({
  selector: 'app-formulario-anyadir',
  templateUrl: './formulario-anyadir.component.html',
  styleUrls: ['./formulario-anyadir.component.scss'],
})
export class FormularioAnyadirComponent {
  productoFormulario: FormGroup = this.formBuilder.group({
    nombre: [null, [Validators.required, Validators.minLength(4)]],
    precio: [
      null,
      [Validators.required, Validators.min(1), Validators.max(999)],
    ],
    descripcion: [
      null,
      [
        Validators.required,
        Validators.maxLength(350),
        noSpecialCharactersValidator(),
      ],
    ],
    favorito: [false],
  });

  valorFormulario: any;
  formularioEnviado = false;
  showModal = false;
  products$: Product[] = [];
  productosSimilares: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.fetchProducts();

    this.productService.getProductsObservableData().subscribe((data) => {
      this.products$ = data;
    });
  }

  enviarInfoUsuario() {
    this.formularioEnviado = true;
    console.log('Datos del formulario:', this.productoFormulario.value);

    if (this.productoFormulario.valid) {
      const nuevoProducto: Product = {
        image: 'default-cafe.png',
        product: this.productoFormulario.value.nombre,
        price: this.productoFormulario.value.precio,
        currency: '€',
        rating: 2.5,
        description: this.productoFormulario.value.descripcion,
        similarProducts: this.productosSimilares,
        reviews: [],
        favourite: this.productoFormulario.value.favorito,
        add: false,
      };

      this.productService.addProductToList(nuevoProducto);
      this.showModal = true;
      this.productoFormulario.reset();
      this.formularioEnviado = false;
    }
  }

  validarCampo(campo: string): boolean {
    return (
      this.formularioEnviado && this.productoFormulario.controls[campo].invalid
    );
  }

  addMainProduct(product: Product) {
    this.productService.addProductToCart(product);
    alert('Producto añadido al carrito correctamente !');
  }

  checkBoxProductoSimilar(product: any, event: any) {
    if (event.target.checked) {
      this.productosSimilares.push(product);
    } else {
      this.productosSimilares = this.productosSimilares.filter(
        (p) => p !== product
      );
    }
  }
}
