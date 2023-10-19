package dev.bonigarcia.config;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverFactory {
    private static WebDriver driver;
    private static final String PROP_DRIVER_NAME = "browser.type";
    private static final String CHROME = "chrome";
    private static final String FIREFOX = "firefox";

    public WebDriver getDriver() {
        // Default browser.type set to chrome in pom
        String browser = getDriverNameToUse();
        switch (browser) {
            case CHROME -> driver = getChromeDriver();
            case FIREFOX -> driver = getFirefoxDriver();
        }
        return driver;
    }

    private WebDriver getChromeDriver() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new");
        options.addArguments("--window-size=1920,1080");
        return new ChromeDriver(options);
    }

    private WebDriver getFirefoxDriver() {
        WebDriverManager.firefoxdriver().setup();
        return new FirefoxDriver();
    }

    private String getDriverNameToUse() {
        return System.getProperty(PROP_DRIVER_NAME);
    }
}
