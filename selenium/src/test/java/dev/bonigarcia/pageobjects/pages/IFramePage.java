package dev.bonigarcia.pageobjects.pages;

import dev.bonigarcia.pageobjects.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class IFramePage extends BasePage {

    @FindBy(id = "my-iframe")
    public WebElement frame;

    @FindBy(id = "content")
    public WebElement frameContent;

    public IFramePage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public String getContentOfFrame() {
        waitForElementVisible(frame);
        driver.switchTo().frame(frame);
        return frameContent.getText();

    }
}
