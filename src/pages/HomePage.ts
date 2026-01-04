import { Page, Locator } from "@playwright/test";
import { HomeLocators } from "./locators/HomeLocators";
import { BasePage } from "./BasePage";

/**
 * Page Object para la página principal del sitio del Banco Caja Social.
 * Contiene métodos de alto nivel que representan acciones de usuario en la página.
 */
export class HomePage extends BasePage {
    private readonly home:Locator;
    private readonly buttonEmpresas:Locator;
    private readonly productos:Locator;
    private readonly recaudo:Locator;
    /**
     * Constructor del Page Object.
     * Inicializa los locators usados en la página.
     * @param page - Instancia de Playwright Page.
     */
    constructor (page: Page) {
        super (page);
        this.home = page.locator(HomeLocators.home);
        this.buttonEmpresas = page.locator(HomeLocators.buttonEmpresas);
        this.productos = page.locator(HomeLocators.productos);
        this.recaudo = page.locator(HomeLocators.recaudo);
    }

    /**
     * Valida que la página principal cargue correctamente.
     * Abre la URL base y verifica que el elemento principal sea visible.
     */
    async ValidaIngreso() {
        await this.loadWeb('https://www.bancocajasocial.com');
        await this.expectVisible(HomeLocators.home);
    }

    /**
     * Abre el menú Empresas.
     */
    async ValidaButtonEmpresas() {
        await this.expectVisible(HomeLocators.buttonEmpresas);
        await this.ClickOn(HomeLocators.buttonEmpresas);
    }

    /**
     * Abre el submenú Productos.
     */
    async ValidaButtonProductos() {
        await this.expectVisible(HomeLocators.productos);
        await this.ClickOn(HomeLocators.productos);
    }

    /**
     * Navega hasta la sección Recaudos desde Productos.
     */
    async ValidaButtonRecaudos() {
        await this.expectVisible(HomeLocators.PagosRecaudos);
        await this.expectVisible(HomeLocators.recaudo);
        await this.ClickOn(HomeLocators.recaudo);
    }
}