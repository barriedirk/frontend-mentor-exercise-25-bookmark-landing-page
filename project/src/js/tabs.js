export const initializeTabs = () => {
  const tabList = document.querySelector(".tabs");
  const tabs = tabList.querySelectorAll('[role="tab"]');
  const panels = tabList.querySelectorAll('[role="tabpanel"]');
  const TIMEOUT_SEC = 300;

  function activateTab(tab) {
    // Deactivate all tabs
    tabs.forEach((t) => {
      t.setAttribute("aria-selected", "false");
      t.setAttribute("tabindex", "-1");
      t.classList.remove("tabs__tab--active");
    });

    // Hide all panels
    panels.forEach((p) => {
      p.classList.remove("tabs__panel--active");
      p.setAttribute("aria-hidden", "true");

      setTimeout(() => (p.hidden = true), TIMEOUT_SEC);
    });

    // Activate selected tab
    tab.setAttribute("aria-selected", "true");
    tab.setAttribute("tabindex", "0");
    tab.classList.add("tabs__tab--active");

    const panelId = tab.getAttribute("aria-controls");
    const panel = tabList.querySelector(`#${panelId}`);

    setTimeout(() => (panel.hidden = false), TIMEOUT_SEC);
    panel.classList.add("tabs__panel--active");
    panel.setAttribute("aria-hidden", "false");

    tab.focus();
  }

  // Click events
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab));
  });

  // Keyboard navigation
  tabList.addEventListener("keydown", (e) => {
    const key = e.key;
    const currentTab = document.activeElement;
    const currentIndex = Array.prototype.indexOf.call(tabs, currentTab);

    let newIndex = null;

    if (key === "ArrowRight") {
      newIndex = (currentIndex + 1) % tabs.length;
    } else if (key === "ArrowLeft") {
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (key === "Home") {
      newIndex = 0;
    } else if (key === "End") {
      newIndex = tabs.length - 1;
    }

    if (newIndex !== null) {
      e.preventDefault();

      activateTab(tabs[newIndex]);
    }
  });
};
