import { test, expect } from '@playwright/test';

// Test: Navigate to EPAM homepage -> Services -> Explore Our Client Work -> Verify 'Client Work' text
test('Navigate and verify Client Work section on EPAM site', async ({ page }) => {
  // Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click the "Services" option from the header menu
  // Using a role-based selector for resilience
  const servicesLink = page.getByRole('link', { name: /Services/i });
  await servicesLink.click();

  // Click the "Explore Our Client Work" link
  // Use a case-insensitive text match to find the link
  const exploreClientWork = page.getByRole('link', { name: /Explore Our Client Work/i });
  await exploreClientWork.click();

  // Verify that the text "Client Work" is visible on the final page
  const clientWorkText = page.getByText(/Client Work/i);
  await expect(clientWorkText).toBeVisible();
});
