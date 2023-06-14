package dev.bonigarcia;

import dev.bonigarcia.config.DriverFactory;
import org.junit.jupiter.api.*;
import org.openqa.selenium.WebDriver;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BaseTest {

    public WebDriver driver;
    protected DriverFactory driverFactory = new DriverFactory();
    protected String BASE_URL = "https://bonigarcia.dev/selenium-webdriver-java";

    @BeforeAll
    public void setUp() {
        driver = driverFactory.getDriver();
        driver.manage().deleteAllCookies();
    }

    protected String getBaseUrl() {
        return BASE_URL;
    }

    @BeforeEach
    public void openPage() {
        driver.get(getBaseUrl());
        driver.manage().window().maximize();
    }

    @AfterAll
    public void tearDown() {
        driver.quit();
    }
}
