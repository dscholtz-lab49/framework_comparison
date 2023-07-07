package dev.bonigarcia.tests;

import dev.bonigarcia.BaseTest;
import dev.bonigarcia.pageobjects.pages.InfiniteScrollPage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.Matchers.is;

public class InfiniteScrollTest extends BaseTest {
    private static final String INFINITE_SCROLL_URL = "/infinite-scroll.html";
    InfiniteScrollPage infiniteScrollPage;

    @Override
    protected String getBaseUrl() {
        return BASE_URL + INFINITE_SCROLL_URL;
    }

    @BeforeAll
    public void init() {
        infiniteScrollPage = new InfiniteScrollPage(driver);
    }

    @Test
    public void scrollingDownShouldLoadMoreArticles() {
        assertThat(infiniteScrollPage.getCurrentParagraphs(), is(20));

        infiniteScrollPage.scrollToBottomUntil(40);

        assertThat(infiniteScrollPage.getCurrentParagraphs(), greaterThan(20));
    }
}
