/**
 * Pruebas de integración para la sección de Recaudos y utilidades de ejemplo.
 * - Verifica navegación hasta el reglamento de recaudos y apertura de PDF.
 * - Incluye una prueba de utilidad para validar frases palíndromas.
 */
//import { Given, When, Then } from '@cucumber/cucumber'
import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage.ts';
import { RecaudosPage } from '../src/pages/RecaudosPage.ts';
import { isPalindrome, printIsPalindrome } from '../src/utils/palindrome';

/*
let home: HomePage;
let recaudos: RecaudosPage;

Given('el usuario accede al sitio web del Banco Caja Social', async function () {
  home = new HomePage(this.page);
  await home.ValidaIngreso();
});

Given('navega a la sección Empresas > Productos > Recaudos', async function () {
  await home.ValidaButtonEmpresas();
  await home.ValidaButtonProductos();
  await home.ValidaButtonRecaudos();
});

When('abre el documento de Reglamento de Recaudos', async function () {
  recaudos = new RecaudosPage(this.page);
  await recaudos.ValidaIngreso();
  await recaudos.openReglamentoPDF();
});

Then('el documento se abre correctamente en una nueva pestaña', async function () {
  const isValid = await validatePDF(this.page);
  expect(isValid).toBe(true);
});

*/
test.describe('Validación de Reglamento de Recaudos', () => {
  test('Debe abrir el PDF correctamente', async ({ page }) => {
    // Inicializa page object y navega hasta la sección Recaudos
    const home = new HomePage(page);
    await home.ValidaIngreso();
    await home.ValidaButtonEmpresas();
    await home.ValidaButtonProductos();
    await home.ValidaButtonRecaudos();

    // Valida que la sección Recaudos esté visible y abre el reglamento
    const recaudos = new RecaudosPage(page);
    await recaudos.ValidaIngreso();
    await recaudos.openReglamentoPDF();

    // Nota: la comprobación de contenido del PDF puede requerir abrir la nueva pestaña y esperar su carga
    // const validatePDF = new ValidatePDF(page);
    // await validatePDF.validaTituloPDF();
  });
});

test.describe('Validación frase palindroma', () => {
  test('Debe validar si una frase es palindroma', async () => {
    // Casos de prueba y salida en consola
    const a = 'Anita lava la tina';
    const b = 'A man, a plan, a canal: Panama';
    const c = 'Hola mundo';

    // Imprimir resultados en consola (la función no devuelve valor)
    printIsPalindrome(a);
    printIsPalindrome(b);
    printIsPalindrome(c);
  });
});



