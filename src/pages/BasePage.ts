import { Page, expect } from "@playwright/test";

/**
 * Clase base con utilidades comunes para todas las páginas.
 * Provee métodos reutilizables para navegación y acciones básicas.
 */
export class BasePage {

    protected readonly page: Page 

    constructor (page: Page) {
        this.page = page;
    }

    /**
     * Navega a la URL especificada.
     * @param url - URL a cargar.
     */
    async loadWeb(url: string) {
        await this.page.goto(url);
    }

    /**
     * Hace clic en el selector proporcionado.
     * @param selector - Selector que identifica el elemento.
     */
    async ClickOn(selector: string) {
        await this.page.click(selector);
    }

    /**
     * Verifica que el selector sea visible en la página.
     * Hace hover antes de la aserción para intentar forzar la aparición de elementos ocultos.
     * @param selector - Selector que identifica el elemento a validar.
     */
    async expectVisible(selector: string) {
        await this.page.locator(selector).hover();
        await expect(this.page.locator(selector)).toBeVisible();
    }

    /**
     * Verifica si una lista o elemento tiene un atributo booleano activo.
     * Devuelve `true` si el atributo indicado tiene el valor `'true'`, de lo contrario `false`.
     * @param selector - Selector del elemento.
     * @param atribute - Nombre del atributo a leer (ej. 'aria-expanded').
     */
    async ListaActiva(selector: string, atribute: string) {
        await this.page.locator(selector).waitFor();
        const lista = this.page.locator(selector).getAttribute(atribute);
        if (await lista === 'true') {
            return true;
        } else {
            return false;
        }
    }


} 

