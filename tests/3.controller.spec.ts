import { test, expect }  from "@playwright/test";

import exp from "constants";

test.describe(`Controller`, () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/");
  });

  test(`sending a message, adds it to the chat div`, async ({ page }) => {

    await page.route(`**/messages`, async(route) => {
      if(route.request().method() === "POST") {
        const postData = JSON.parse(route.request().postData() || ``);
        await expect(postData).toEqual({
          
          timestamp: expect.any(String)
        });
        route.abort();
      }
      if(route.request().method() === "GET") {
        route.fulfill({
          status: 200,
          contentType: "application/json; charset=utf-8",
          body: JSON.stringify([
            {
              "id": 1,
              "sender": "Yahya Gilany",
              "text": "You made it, my friend!",
              "timestamp": 1537410673072
            },
            {
              
              "timestamp": "2024-01-29T19:05:32.562Z",
              "id": 2
            }
          ])
        })
      }
    });

    const nameField = await page.locator(`#my-name-input`);
    const messageField = await page.locator(`#my-message`);
    const sendButton = await page.locator(`#send-button`);
    
   
    await sendButton.click();



    const requestPromise = page.waitForResponse(`**/messages`);
    const messagesDiv = await page.locator(`#chat`);
    await requestPromise;
    // await expect((await requestPromise).request().postData()).toEqual({
    //   sender: testerName,
    //   text: randomMessage
    // });
    //await expect(messagesDiv).toContainText(randomMessage);
  });
});