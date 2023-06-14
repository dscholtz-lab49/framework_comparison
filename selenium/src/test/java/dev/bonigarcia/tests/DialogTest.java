package dev.bonigarcia.tests;

import dev.bonigarcia.BaseTest;
import dev.bonigarcia.pageobjects.pages.DialogsPage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class DialogTest extends BaseTest {
    private static final String DIALOG_URL = "/dialog-boxes.html";
    DialogsPage dialogsPage;

    @Override
    protected String getBaseUrl() {
        return BASE_URL + DIALOG_URL;
    }

    @BeforeAll
    public void init() {
        dialogsPage = new DialogsPage(driver);
    }

    @Test
    public void clickingOnAlertButtonShouldShowAlertDialog() {
        dialogsPage.clickOnAlertButton();
        assertThat(dialogsPage.getTextFromPopUp(), is("Hello world!"));
        dialogsPage.acceptPopUp();
    }

    @Test
    public void clickingOKOnConfirmBoxShouldShowTrue() {
        dialogsPage.clickOnConfirmButton();
        assertThat(dialogsPage.getTextFromPopUp(), is("Is this correct?"));
        dialogsPage.acceptPopUp();
        assertThat(dialogsPage.getTextOfConfirmText(), is("You chose: true"));
    }

    @Test
    public void clickingCancelOnConfirmBoxShouldShowFalse() {
        dialogsPage.clickOnConfirmButton();
        assertThat(dialogsPage.getTextFromPopUp(), is("Is this correct?"));
        dialogsPage.dismissPopUp();
        assertThat(dialogsPage.getTextOfConfirmText(), is("You chose: false"));
    }

    @Test
    public void sendingTextToPromptBoxShouldShowText() {
        String text = "test";
        dialogsPage.clickOnPromptButton();
        assertThat(dialogsPage.getTextFromPopUp(), is("Please enter your name"));
        dialogsPage.sendTextToPopUp(text);
        dialogsPage.acceptPopUp();
        assertThat(dialogsPage.getTextOfPromptText(), is("You typed: " + text));
    }

    @Test
    public void cancellingTextToPromptBoxShouldShowText() {
        String text = "test";
        dialogsPage.clickOnPromptButton();
        assertThat(dialogsPage.getTextFromPopUp(), is("Please enter your name"));
        dialogsPage.sendTextToPopUp(text);
        dialogsPage.dismissPopUp();
        assertThat(dialogsPage.getTextOfPromptText(), is("You typed: null"));
    }

    @Test
    public void savingModalShouldShowYouChooseSaveChanges() {
        dialogsPage.clickOnModalButton();
        assertThat(dialogsPage.getTextOfModalBody(), is("This is the modal body"));
        dialogsPage.saveModal();
        assertThat(dialogsPage.getTextOfModalText(), is("You chose: Save changes"));
    }

    @Test
    public void closingModalShouldShowYouChooseClose() {
        dialogsPage.clickOnModalButton();
        assertThat(dialogsPage.getTextOfModalBody(), is("This is the modal body"));
        dialogsPage.closeModal();
        assertThat(dialogsPage.getTextOfModalText(), is("You chose: Close"));
    }
}
