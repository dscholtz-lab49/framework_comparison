package dev.bonigarcia.pageobjects.pages;

import dev.bonigarcia.pageobjects.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DialogsPage extends BasePage {

    @FindBy(id = "my-alert")
    public WebElement alertButton;

    @FindBy(id = "my-confirm")
    public WebElement confirmButton;

    @FindBy(id = "my-prompt")
    public WebElement promptButton;

    @FindBy(id = "my-modal")
    public WebElement modalButton;

    @FindBy(className = "modal-body")
    public WebElement modalBody;

    @FindBy(xpath = "//*[@id='example-modal']//button[contains(text(),'Save')]")
    public WebElement modalSave;

    @FindBy(xpath = "//*[@id='example-modal']//button[contains(text(),'Close')]")
    public WebElement modalClose;

    @FindBy(id = "confirm-text")
    public WebElement confirmText;

    @FindBy(id = "prompt-text")
    public WebElement promptText;

    @FindBy(id = "modal-text")
    public WebElement modalText;


    public DialogsPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public String getTextFromPopUp() {
        return switchToAlertPopUp().getText();
    }

    public void acceptPopUp() {
        switchToAlertPopUp().accept();
    }

    public void dismissPopUp() {
        switchToAlertPopUp().dismiss();
    }

    public void sendTextToPopUp(String text) {
        switchToAlertPopUp().sendKeys(text);
    }

    public void clickOnAlertButton() {
        waitForElementVisible(alertButton);
        alertButton.click();
    }

    public void clickOnConfirmButton() {
        waitForElementVisible(confirmButton);
        confirmButton.click();
    }

    public void clickOnPromptButton() {
        waitForElementVisible(promptButton);
        promptButton.click();
    }

    public void clickOnModalButton() {
        waitForElementVisible(modalButton);
        modalButton.click();
    }

    public String getTextOfConfirmText() {
        return confirmText.getText();
    }

    public String getTextOfPromptText() {
        return promptText.getText();
    }

    public String getTextOfModalText() {
        return modalText.getText();
    }

    public String getTextOfModalBody() {
        waitForElementVisible(modalBody);
        return modalBody.getText();
    }

    public void saveModal() {
        modalSave.click();
    }

    public void closeModal() {
        modalClose.click();
    }
}
