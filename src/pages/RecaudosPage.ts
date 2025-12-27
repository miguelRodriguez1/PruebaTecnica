import { Page,Locator, expect } from "@playwright/test";
import { RecaudosLocators } from "./locators/RecaudosLocators";
import { BasePage } from "./BasePage";
// src/pages/RecaudosPage.ts
export class RecaudosPage extends BasePage {
    private readonly Documentos:Locator;
    private readonly ReglamentoRecaudos:Locator;
    private readonly tittleRecaudos:Locator;

    constructor (page:Page){
        super (page);
        this.Documentos=page.locator(RecaudosLocators.Documentos)
        this.ReglamentoRecaudos=page.locator(RecaudosLocators.ReglamentoRecaudos)
        this.tittleRecaudos=page.locator(RecaudosLocators.tittleRecaudos)

    }

    async ValidaIngreso(){
        await this.expectVisible(RecaudosLocators.tittleRecaudos)
    }

     async openReglamentoPDF(){
        await this.expectVisible(RecaudosLocators.Documentos)
        await this.expectVisible(RecaudosLocators.ReglamentoRecaudos)
        await this.ClickOn(RecaudosLocators.ReglamentoRecaudos)
        //this.page.context().waitForEvent('page')
        console.log(this.page.url())
    }
}
