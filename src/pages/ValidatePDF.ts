import { Page, Locator } from "@playwright/test";

//src/pages/ValidatePDF.ts

/**
 * Utilidades para validar contenido de PDFs abiertos desde la aplicación.
 * Actualmente contiene métodos de comprobación básicos (pueden requerir espera explícita).
 */
export class ValidatePDF {

protected readonly page: Page 
  
/**
 * @param page - Instancia de Playwright Page.
 */
constructor (page: Page) {
  this.page = page;
}

/**
 * Intenta validar el título del PDF. Observación: `page.title()` es asíncrono, por lo que
 * podría requerir `await` o esperar la nueva pestaña si el PDF abre en otra página.
 */
async validaTituloPDF() {
    this.page.context().waitForEvent('page');
    // this.page.getByText('Reglamento de Recaudos').click()
    // await pdfPage.waitForLoadState('domcontentloaded');
    console.log(this.page.title());
}

} 
