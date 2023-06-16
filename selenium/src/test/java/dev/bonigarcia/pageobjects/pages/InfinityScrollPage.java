package dev.bonigarcia.pageobjects.pages;

import dev.bonigarcia.pageobjects.BasePage;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class InfinityScrollPage extends BasePage {

    @FindBy(id = "content")
    public WebElement content;

    public InfinityScrollPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public void scrollToBottomUntil(int count) {
        int elementsCount = getCurrentParagraphs();

        while (elementsCount < count) {
            JavascriptExecutor jse = (JavascriptExecutor) driver;
            jse.executeScript("window.scrollTo(0, document.body.scrollHeight);");
            elementsCount = getCurrentParagraphs();
        }
    }

    public int getCurrentParagraphs() {
        // By default it has 20 paragraph and after every scroll it adds an other 20
        return Integer.parseInt(getValueFromElement(content, "childElementCount"));
    }
}
