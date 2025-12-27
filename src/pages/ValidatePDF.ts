import { Page,Locator } from "@playwright/test";

//src/pages/ValidatePDF.ts

export class ValidatePDF{

protected readonly page: Page 
  
constructor (page:Page){
  this.page=page
}

async validaTituloPDF(){
    this.page.context().waitForEvent('page')
    //this.page.getByText('Reglamento de Recaudos').click()
    //await pdfPage.waitForLoadState('domcontentloaded');
    console.log(this.page.title())
}

}
