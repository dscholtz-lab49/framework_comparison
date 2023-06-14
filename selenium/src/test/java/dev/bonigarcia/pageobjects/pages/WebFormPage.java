package dev.bonigarcia.pageobjects.pages;

import dev.bonigarcia.pageobjects.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class WebFormPage extends BasePage {

    @FindBy(css = "#my-text-id")
    public WebElement textInput;

    @FindBy(name = "my-password")
    public WebElement passwordInput;

    @FindBy(name = "my-textarea")
    public WebElement textArea;

    @FindBy(name = "my-disabled")
    public WebElement disabledInput;

    @FindBy(name = "my-readonly")
    public WebElement readOnlyInput;

    @FindBy(name = "my-select")
    public WebElement dropDownSelect;

    @FindBy(name = "my-datalist")
    public WebElement dropDownDataList;

    @FindBys(@FindBy( xpath = "//*[@id='my-options']"))
    public List<WebElement> dataListOptions;

    @FindBy(name = "my-file")
    public WebElement fileInput;

    @FindBy(id = "my-check-1")
    public WebElement checkedCheckbox;

    @FindBy(id = "my-check-2")
    public WebElement defaultCheckbox;

    @FindBy(id = "my-radio-1")
    public WebElement checkedRadioButton;

    @FindBy(id = "my-radio-2")
    public WebElement defaultRadioButton;

    @FindBy(xpath = "//button[text()='Submit']")
    public WebElement submitButton;

    @FindBy(xpath = "//input[@type='color']")
    public WebElement colorPicker;

    @FindBy(name = "my-date")
    public WebElement datePicker;

    @FindBy(name = "my-range")
    public WebElement rangeSelector;
    
    private static final String VALUE = "value";


    public WebFormPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public void fillTextInput(String text) {
        waitForElementVisible(textInput);
        textInput.sendKeys(text);
    }

    public String getValueOfTextInput() {
        return getValueFromElement(textInput, VALUE);
    }

    public void fillReadOnlyInput(String text) {
        waitForElementVisible(readOnlyInput);
        readOnlyInput.sendKeys(text);
    }

    public String getValueOfReadOnlyInput() {
        return getValueFromElement(readOnlyInput, VALUE);
    }

    public void fillPasswordInput(String password) {
        waitForElementVisible(passwordInput);
        passwordInput.sendKeys(password);
    }

    public String getValueOfPasswordInput() {
        return getValueFromElement(passwordInput, VALUE);
    }

    public void fillTextArea(String text) {
        waitForElementVisible(textArea);
        textArea.sendKeys(text);
    }

    public String getValueOfTextArea() {
        return getValueFromElement(textArea, VALUE);
    }

    public void selectFromDropDown(String option) {
        waitForElementVisible(dropDownSelect);
        Select selectDropdown = new Select(dropDownSelect);
        selectDropdown.selectByVisibleText(option);
    }

    public String getValueOfDropDownSelect() {
        return getValueFromElement(dropDownSelect, VALUE);
    }

    public void fillDropDownListInput(String option) {
        waitForElementVisible(dropDownDataList);
        dropDownDataList.sendKeys(option);

        String optionValue = driver.findElement(By.xpath("//option[contains(@value,'"+option+"')]")).getAttribute(VALUE);
        dropDownDataList.clear();
        dropDownDataList.sendKeys(optionValue);
    }

    public String getValueOfDropDownDataList() {
        return getValueFromElement(dropDownDataList, VALUE);
    }

    public void uploadFile(String fileName) {
        String pathToFolders = "/src/test/java/dev/bonigarcia/";
        String filePath = System.getProperty("user.dir") + pathToFolders + fileName;
        waitForElementVisible(fileInput);
        fileInput.sendKeys(filePath);
        //In normal case there would be a submit button
    }
    
    public String getValueOfFileInput() {
        return getValueFromElement(fileInput, VALUE);
    }

    public void checkDefaultCheckbox() {
        waitForElementVisible(defaultCheckbox);
        defaultCheckbox.click();
    }

    public void checkDefaultRadioButton() {
        waitForElementVisible(defaultRadioButton);
        defaultRadioButton.click();
    }

    public void fillDatePicker(String date) {
        waitForElementVisible(datePicker);
        datePicker.sendKeys(date);
    }

    public String getValueOfDatePicker() {
        return getValueFromElement(datePicker, VALUE);
    }
}
