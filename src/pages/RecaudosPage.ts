import { Page, Locator, expect } from "@playwright/test";
import { RecaudosLocators } from "./locators/RecaudosLocators";
import { BasePage } from "./BasePage";

/**
 * Page Object para la sección de Recaudos.
 * Contiene acciones específicas como abrir el reglamento en PDF.
 */
// src/pages/RecaudosPage.ts
export class RecaudosPage extends BasePage {
    private readonly Documentos:Locator;
    private readonly ReglamentoRecaudos:Locator;
    private readonly tittleRecaudos:Locator;

    /**
     * Inicializa locators específicos de la sección Recaudos.
     * @param page - Instancia de Playwright Page.
     */
    constructor (page: Page) {
        super (page);
        this.Documentos = page.locator(RecaudosLocators.Documentos);
        this.ReglamentoRecaudos = page.locator(RecaudosLocators.ReglamentoRecaudos);
        this.tittleRecaudos = page.locator(RecaudosLocators.tittleRecaudos);

    }

    /**
     * Verifica que la sección Recaudos haya cargado correctamente.
     */
    async ValidaIngreso() {
        await this.expectVisible(RecaudosLocators.tittleRecaudos);
    }

    /**
     * Abre el reglamento en PDF desde la sección Documentos.
     * Actualmente se hace clic en el enlace y se imprime la URL de la página.
     */
     async openReglamentoPDF() {
        await this.expectVisible(RecaudosLocators.Documentos);
        await this.expectVisible(RecaudosLocators.ReglamentoRecaudos);
        await this.ClickOn(RecaudosLocators.ReglamentoRecaudos);
        // Nota: esperar evento 'page' puede ser necesario si el PDF se abre en una nueva pestaña
        // this.page.context().waitForEvent('page')
        console.log(this.page.url());
    }
}
