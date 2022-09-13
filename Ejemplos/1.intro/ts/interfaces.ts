/** Interfaces:
 * Las interfaces son usadas para indicar qué métodos debe obligatoriamente implementar (contener)
 * una clase.
 * Dichos métodos deben ser forzosamente 'public'.
 * En lenguajes que no soportan herencia múltiple, se puede usar también para simularla.
 * Una interfaz nos permite "categorizar" objetos
 * puesto que el objeto tendrá un comportamiento y características ya esperadas.
 */

// ejemplo de interface "Product"
export interface Product{
    price: number;
    getPrice(): string;
}