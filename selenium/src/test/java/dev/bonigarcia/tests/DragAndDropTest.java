package dev.bonigarcia.tests;

import dev.bonigarcia.BaseTest;
import dev.bonigarcia.pageobjects.pages.DragAndDropPage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class DragAndDropTest extends BaseTest {
    private static final String DRAG_AND_DROP_URL = "/drag-and-drop.html";
    DragAndDropPage dragAndDropPage;

    @Override
    protected String getBaseUrl() {
        return BASE_URL + DRAG_AND_DROP_URL;
    }

    @BeforeAll
    public void init() {
        dragAndDropPage = new DragAndDropPage(driver);
    }

    @Test
    public void elementShouldBeDragAndDroppedToTarget() {
        // Original position
        assertThat(dragAndDropPage.getXLocOfDraggableElement(), is(305));
        assertThat(dragAndDropPage.getYLocOfDraggableElement(), is(236));

        dragAndDropPage.dragElementToTarget();

        // New position
        assertThat(dragAndDropPage.getXLocOfDraggableElement(), is(965));
        assertThat(dragAndDropPage.getYLocOfDraggableElement(), is(236));
    }
}
