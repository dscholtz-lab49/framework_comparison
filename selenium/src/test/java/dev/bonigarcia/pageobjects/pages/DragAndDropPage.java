package dev.bonigarcia.pageobjects.pages;

import dev.bonigarcia.pageobjects.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DragAndDropPage extends BasePage {

    @FindBy(id = "draggable")
    public WebElement draggable;

    @FindBy(id = "target")
    public WebElement target;

    public DragAndDropPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public void dragElementToTarget() {
        Actions act=new Actions(driver);

        //Dragged and dropped.
        act.dragAndDrop(draggable, target).build().perform();
    }

    public int getXLocOfDraggableElement() {
        return draggable.getLocation().getX();
    }

    public int getYLocOfDraggableElement() {
        return draggable.getLocation().getY();
    }
}
