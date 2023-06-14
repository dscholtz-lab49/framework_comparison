package dev.bonigarcia.pageobjects;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class BasePage {

    private static final Duration TIME_OUT = Duration.ofSeconds(5);
    protected WebDriver driver;

    public BasePage(WebDriver driver) {
        this.driver = driver;
    }

    public void waitForElementVisible(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, TIME_OUT);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void waitForElementClickable(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, TIME_OUT);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public String getValueFromElement(WebElement element, String attributeValue) {
        return element.getAttribute(attributeValue);
    }

    public Alert switchToAlertPopUp() {
        return driver.switchTo().alert();
    }
}
