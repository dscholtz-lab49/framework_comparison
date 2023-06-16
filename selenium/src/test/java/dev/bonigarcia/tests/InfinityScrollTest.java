package dev.bonigarcia.tests;

import dev.bonigarcia.BaseTest;
import dev.bonigarcia.pageobjects.pages.InfinityScrollPage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.Matchers.is;

public class InfinityScrollTest extends BaseTest {
    private static final String INFINITY_SCROLL_URL = "/infinite-scroll.html";
    InfinityScrollPage infinityScrollPage;

    @Override
    protected String getBaseUrl() {
        return BASE_URL + INFINITY_SCROLL_URL;
    }

    @BeforeAll
    public void init() {
        infinityScrollPage = new InfinityScrollPage(driver);
    }

    @Test
    public void scrollingDownShouldLoadMoreArticles() {
        assertThat(infinityScrollPage.getCurrentParagraphs(), is(20));

        infinityScrollPage.scrollToBottomUntil(40);

        assertThat(infinityScrollPage.getCurrentParagraphs(), greaterThan(20));
    }
}
