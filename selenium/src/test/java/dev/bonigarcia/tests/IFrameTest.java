package dev.bonigarcia.tests;

import dev.bonigarcia.BaseTest;
import dev.bonigarcia.pageobjects.pages.IFramePage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;

public class IFrameTest  extends BaseTest {
    private static final String IFRAME_URL = "/iframes.html";
    IFramePage iFramePage;

    @Override
    protected String getBaseUrl() {
        return BASE_URL+IFRAME_URL;
    }

    @BeforeAll
    public void init() {
        iFramePage = new IFramePage(driver);
    }

    @Test
    public void contentOfIFrameShouldBeLoaded() {
        assertThat(iFramePage.getContentOfFrame(), containsString("Lorem"));
    }
}
