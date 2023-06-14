package dev.bonigarcia.tests;

import dev.bonigarcia.BaseTest;
import dev.bonigarcia.pageobjects.pages.WebFormPage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;

public class WebFormTest extends BaseTest {
    private static final String WEB_FORM_ENDPOINT = "/web-form.html";
    WebFormPage webFormPage;

    @Override
    protected String getBaseUrl() {
        return BASE_URL + WEB_FORM_ENDPOINT;
    }

    @BeforeAll
    public void init() {
        webFormPage = new WebFormPage(driver);
    }

    @Test
    public void allElementsShouldBeVisible() {
        assertThat(webFormPage.textInput.isDisplayed(), is(true));
        assertThat(webFormPage.passwordInput.isDisplayed(), is(true));
        assertThat(webFormPage.textArea.isDisplayed(), is(true));
        assertThat(webFormPage.disabledInput.isDisplayed(), is(true));
        assertThat(webFormPage.readOnlyInput.isDisplayed(), is(true));
        assertThat(webFormPage.dropDownSelect.isDisplayed(), is(true));
        assertThat(webFormPage.dropDownDataList.isDisplayed(), is(true));
        assertThat(webFormPage.fileInput.isDisplayed(), is(true));
        assertThat(webFormPage.checkedCheckbox.isDisplayed(), is(true));
        assertThat(webFormPage.defaultCheckbox.isDisplayed(), is(true));
        assertThat(webFormPage.checkedRadioButton.isDisplayed(), is(true));
        assertThat(webFormPage.defaultRadioButton.isDisplayed(), is(true));
        assertThat(webFormPage.submitButton.isDisplayed(), is(true));
        assertThat(webFormPage.colorPicker.isDisplayed(), is(true));
        assertThat(webFormPage.datePicker.isDisplayed(), is(true));
        assertThat(webFormPage.rangeSelector.isDisplayed(), is(true));
    }

    @Test
    public void InputFieldsShouldAcceptAnyText() {
        String textInputValue = "test";
        String passwordInputValue = "password";
        String textAreaValue = "text";
        webFormPage.fillTextInput(textInputValue);
        webFormPage.fillPasswordInput(passwordInputValue);
        webFormPage.fillTextArea(textAreaValue);
        assertThat(webFormPage.getValueOfTextInput(), is(textInputValue));
        assertThat(webFormPage.getValueOfPasswordInput(), is(passwordInputValue));
        assertThat(webFormPage.getValueOfTextArea(), is(textAreaValue));
    }

    @Test
    public void ReadOnlyFieldShouldNotBeModified() {
        String readOnlyDefaultValue = "Readonly input";
        assertThat(webFormPage.getValueOfReadOnlyInput(), is(readOnlyDefaultValue));

        webFormPage.fillReadOnlyInput("new text");
        assertThat(webFormPage.getValueOfReadOnlyInput(), is(readOnlyDefaultValue));
    }

    @Test
    public void SelectingFromDropdownShouldBeAccepted() {
        webFormPage.selectFromDropDown("Two");
        assertThat(webFormPage.getValueOfDropDownSelect(), is("2"));
    }

    @Test
    public void FillingAndChoosingFromDropDownDataListShouldBeAccepted() {
        String text = "Chicago";
        webFormPage.fillDropDownListInput(text);
        assertThat(webFormPage.getValueOfDropDownDataList(), is(text));
    }

    @Test
    public void uploadingFileShouldBeSuccessful() {
        String fileName = "files/empty.txt";
        webFormPage.uploadFile(fileName);
        assertThat(webFormPage.getValueOfFileInput(), containsString("empty.txt"));
    }

    @Test
    public void CheckingCheckboxAndRadioButtonShouldBeChecked() {
        assertThat(webFormPage.defaultCheckbox.isSelected(), is(false));
        assertThat(webFormPage.defaultRadioButton.isSelected(), is(false));

        webFormPage.checkDefaultCheckbox();
        webFormPage.checkDefaultRadioButton();

        assertThat(webFormPage.defaultCheckbox.isSelected(), is(true));
        assertThat(webFormPage.defaultRadioButton.isSelected(), is(true));
    }

    @Test
    public void settingValidDateOnDatePickerShouldBeAccepted() {
        webFormPage.fillDatePicker("05/03/2023");
        assertThat(webFormPage.getValueOfDatePicker(), is("05/03/2023"));
    }
}
