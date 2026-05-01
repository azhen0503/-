const levels = [
  { code: "A", name: "核心刚需", desc: "必备、高频、利润稳定", color: "#ef4444", soft: "#fee2e2" },
  { code: "B", name: "重要商品", desc: "销售稳定、客流量贡献", color: "#f97316", soft: "#ffedd5" },
  { code: "C", name: "常规商品", desc: "日常销售、补充品类", color: "#f5b70a", soft: "#fef3c7" },
  { code: "D", name: "季节性", desc: "季节性需求、节日商品", color: "#22c55e", soft: "#dcfce7" },
  { code: "E", name: "特色商品", desc: "差异化、特色选品", color: "#15b8ca", soft: "#cffafe" },
  { code: "F", name: "待观察", desc: "新品测试、市场试探", color: "#8b5cf6", soft: "#ede9fe" },
  { code: "G", name: "淘汰候选", desc: "低动销、考虑下架", color: "#64748b", soft: "#e2e8f0" },
];

const seedProducts = [
  {
    id: 1,
    name: "农夫山泉 饮用天然水 550ml",
    brand: "农夫山泉",
    barcode: "6921168501234",
    category: "饮料冲调",
    subCategory: "包装水",
    level: "A",
    salePrice: 2.5,
    costPrice: 1.35,
    updatedAt: "2024-01-15",
    selected: false,
    color: "#dc2626",
    image: "",
    imageSearchUrl: "",
  },
  {
    id: 2,
    name: "可口可乐 汽水 330ml",
    brand: "可口可乐",
    barcode: "6901028012345",
    category: "饮料冲调",
    subCategory: "碳酸饮料",
    level: "B",
    salePrice: 3.5,
    costPrice: 2.1,
    updatedAt: "2024-01-15",
    selected: false,
    color: "#dc2626",
    image: "",
  },
  {
    id: 3,
    name: "乐事薯片 原味 70g",
    brand: "乐事",
    barcode: "6924743923456",
    category: "休闲食品",
    subCategory: "膨化食品",
    level: "C",
    salePrice: 6.5,
    costPrice: 4.2,
    updatedAt: "2024-01-15",
    selected: false,
    color: "#facc15",
    image: "",
  },
  {
    id: 4,
    name: "康师傅 红烧牛肉面 105g",
    brand: "康师傅",
    barcode: "6901038001234",
    category: "方便食品",
    subCategory: "方便面",
    level: "A",
    salePrice: 4.5,
    costPrice: 2.9,
    updatedAt: "2024-01-15",
    selected: false,
    color: "#b91c1c",
    image: "",
  },
  {
    id: 5,
    name: "美年达 橙味汽水 600ml",
    brand: "美年达",
    barcode: "6901028013456",
    category: "饮料冲调",
    subCategory: "碳酸饮料",
    level: "B",
    salePrice: 4,
    costPrice: 2.4,
    updatedAt: "2024-01-15",
    selected: false,
    color: "#f97316",
    image: "",
  },
  {
    id: 6,
    name: "伊利 纯牛奶 250ml",
    brand: "伊利",
    barcode: "6907992501120",
    category: "乳品冷藏",
    subCategory: "常温奶",
    level: "A",
    salePrice: 3.2,
    costPrice: 2.05,
    updatedAt: "2024-01-16",
    selected: false,
    color: "#2563eb",
    image: "",
  },
  {
    id: 7,
    name: "德芙 香浓黑巧克力 43g",
    brand: "德芙",
    barcode: "6914973602211",
    category: "休闲食品",
    subCategory: "巧克力",
    level: "E",
    salePrice: 9.9,
    costPrice: 6.8,
    updatedAt: "2024-01-16",
    selected: false,
    color: "#7c2d12",
    image: "",
  },
  {
    id: 8,
    name: "清风 原木抽纸 3包",
    brand: "清风",
    barcode: "6922266441502",
    category: "家庭日用",
    subCategory: "纸品",
    level: "C",
    salePrice: 12.9,
    costPrice: 8.4,
    updatedAt: "2024-01-16",
    selected: false,
    color: "#22c55e",
    image: "",
  },
  {
    id: 9,
    name: "维达 湿巾 10片装",
    brand: "维达",
    barcode: "6901236385003",
    category: "家庭日用",
    subCategory: "清洁护理",
    level: "D",
    salePrice: 3.9,
    costPrice: 2.1,
    updatedAt: "2024-01-17",
    selected: false,
    color: "#14b8a6",
    image: "",
  },
  {
    id: 10,
    name: "雀巢 咖啡拿铁 268ml",
    brand: "雀巢",
    barcode: "6917878031204",
    category: "饮料冲调",
    subCategory: "即饮咖啡",
    level: "F",
    salePrice: 7.5,
    costPrice: 5.1,
    updatedAt: "2024-01-17",
    selected: false,
    color: "#8b5cf6",
    image: "",
  },
  {
    id: 11,
    name: "洽洽 香瓜子 108g",
    brand: "洽洽",
    barcode: "6924187834562",
    category: "休闲食品",
    subCategory: "坚果炒货",
    level: "C",
    salePrice: 8.8,
    costPrice: 5.6,
    updatedAt: "2024-01-18",
    selected: false,
    color: "#f59e0b",
    image: "",
  },
  {
    id: 12,
    name: "统一 阿萨姆奶茶 500ml",
    brand: "统一",
    barcode: "6925303771201",
    category: "饮料冲调",
    subCategory: "茶饮料",
    level: "B",
    salePrice: 5,
    costPrice: 3.2,
    updatedAt: "2024-01-18",
    selected: false,
    color: "#d97706",
    image: "",
  },
];

const storageKey = "store-label-products-v1";
const accountStorageKey = "store-label-account-v1";
const state = {
  products: [],
  filters: {
    keyword: "",
    level: "",
    category: "",
    brand: "",
    tab: "all",
  },
  page: 1,
  pageSize: 15,
  editingId: null,
  account: null,
  purchaseQuantities: {},
  sort: {
    key: "",
    direction: "asc",
  },
};

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  loadProducts();
  loadAccount();
  renderLevels();
  fillLevelOptions();
  bindEvents();
  renderAccount();
  syncFiltersFromInputs();
  renderAll();
});

function cacheElements() {
  [
    "appShell",
    "sidebar",
    "brandCollapse",
    "collapseBottom",
    "mobileMenu",
    "globalSearch",
    "totalBadge",
    "totalCount",
    "donutTotal",
    "levelList",
    "legendList",
    "donutChart",
    "productSearch",
    "levelFilter",
    "categoryFilter",
    "brandFilter",
    "searchBtn",
    "resetBtn",
    "allCount",
    "selectedCount",
    "unselectedCount",
    "selectPage",
    "exportBtn",
    "productRows",
    "emptyState",
    "visibleCount",
    "pager",
    "pageSize",
    "addProductBtn",
    "batchEditBtn",
    "batchDeleteBtn",
    "productModal",
    "productForm",
    "modalTitle",
    "toast",
    "levelsPanel",
    "statsPanel",
    "imageSettingsModal",
    "dropZone",
    "imageUpload",
    "chooseImagesBtn",
    "autoImageBtn",
    "imageUpdateMode",
    "imagePreviewList",
    "purchaseModal",
    "purchaseRows",
    "supplierName",
    "buyerName",
    "purchaseDate",
    "xlsxText",
    "copyXlsxTextBtn",
    "downloadXlsxTextBtn",
    "accountButton",
    "accountMenu",
    "accountName",
    "accountMenuName",
    "accountMenuEmail",
    "accountModal",
    "accountForm",
    "accountModalTitle",
    "profileDisplayName",
    "profileDisplayEmail",
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function loadProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    state.products = Array.isArray(saved) && saved.length ? saved : seedProducts;
  } catch {
    state.products = seedProducts;
  }
  state.products.forEach((product) => {
    product.selected = false;
  });
  saveProducts();
}

function saveProducts() {
  localStorage.setItem(storageKey, JSON.stringify(state.products));
}

function loadAccount() {
  const fallback = {
    displayName: "张店长",
    email: "1739205980@qq.com",
    phone: "1739205980",
    storeName: "便利店总店",
    role: "店长",
    language: "简体中文",
  };
  try {
    state.account = { ...fallback, ...JSON.parse(localStorage.getItem(accountStorageKey) || "{}") };
  } catch {
    state.account = fallback;
  }
}

function saveAccount() {
  localStorage.setItem(accountStorageKey, JSON.stringify(state.account));
}

function bindEvents() {
  els.brandCollapse.addEventListener("click", toggleSidebar);
  els.collapseBottom.addEventListener("click", toggleSidebar);
  els.mobileMenu.addEventListener("click", () => els.sidebar.classList.toggle("mobile-open"));

  document.querySelectorAll("[data-toggle-group]").forEach((button) => {
    button.addEventListener("click", () => {
      if (els.appShell.classList.contains("sidebar-collapsed")) return;
      button.closest("[data-group]").classList.toggle("open");
    });
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      handleNavAction(button);
    });
  });

  els.searchBtn.addEventListener("click", () => {
    syncFiltersFromInputs();
    renderAll();
  });

  [els.productSearch, els.globalSearch].forEach((input) => {
    input.addEventListener("input", () => {
      const value = input.value;
      els.productSearch.value = value;
      els.globalSearch.value = value;
      state.filters.keyword = value.trim();
      state.page = 1;
      renderAll();
    });
  });

  [els.levelFilter, els.categoryFilter, els.brandFilter].forEach((select) => {
    select.addEventListener("change", () => {
      syncFiltersFromInputs();
      renderAll();
    });
  });

  els.resetBtn.addEventListener("click", () => {
    els.productSearch.value = "";
    els.globalSearch.value = "";
    els.levelFilter.value = "";
    els.categoryFilter.value = "";
    els.brandFilter.value = "";
    state.filters = { keyword: "", level: "", category: "", brand: "", tab: "all" };
    state.page = 1;
    setActiveTab("all");
    renderAll();
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filters.tab = button.dataset.tab;
      state.page = 1;
      setActiveTab(button.dataset.tab);
      renderAll();
    });
  });

  els.selectPage.addEventListener("change", () => {
    getPagedProducts().forEach((product) => {
      product.selected = els.selectPage.checked;
    });
    saveProducts();
    renderAll();
    toast(els.selectPage.checked ? "已选中当前页商品" : "已取消当前页选择");
  });

  els.pager.addEventListener("click", (event) => {
    const button = event.target.closest("[data-page]");
    if (!button || button.disabled) return;
    const next = button.dataset.page === "prev" ? state.page - 1 : button.dataset.page === "next" ? state.page + 1 : Number(button.dataset.page);
    const totalPages = getTotalPages();
    state.page = Math.min(Math.max(1, next), totalPages);
    renderAll();
  });

  els.pageSize.addEventListener("change", () => {
    state.pageSize = Number(els.pageSize.value);
    state.page = 1;
    renderAll();
  });

  els.addProductBtn.addEventListener("click", () => openProductModal());
  els.exportBtn.addEventListener("click", openPurchaseModal);
  els.batchEditBtn.addEventListener("click", batchEdit);
  els.batchDeleteBtn.addEventListener("click", batchDelete);

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeAllModals);
  });

  [els.productModal, els.imageSettingsModal, els.purchaseModal, els.accountModal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeAllModals();
    });
  });

  els.productForm.addEventListener("submit", saveFormProduct);
  bindSorting();
  bindImageSettings();
  bindPurchaseExport();
  bindAccountEvents();
}

function handleNavAction(button) {
  const action = button.dataset.action;
  if (action === "open-add") openProductModal();
  if (action === "export-selected") openPurchaseModal();
  if (action === "stats-focus") scrollToPanel(els.statsPanel);
  if (action === "open-import") importProducts();
  if (action === "open-image-settings") openImageSettings();
  if (action === "open-system-settings") toast("系统配置已保存到本地浏览器，可持续编辑使用。");
  if (button.dataset.panel === "levels") scrollToPanel(els.levelsPanel);
  if (button.dataset.filterSelected === "true") {
    state.filters.tab = "selected";
    state.page = 1;
    setActiveTab("selected");
    renderAll();
  }
}

function toggleSidebar() {
  els.appShell.classList.toggle("sidebar-collapsed");
  els.sidebar.classList.remove("mobile-open");
}

function scrollToPanel(panel) {
  panel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function syncFiltersFromInputs() {
  state.filters.keyword = els.productSearch.value.trim();
  state.filters.level = els.levelFilter.value;
  state.filters.category = els.categoryFilter.value;
  state.filters.brand = els.brandFilter.value;
  state.page = 1;
}

function renderAll() {
  populateFilters();
  renderSummary();
  renderStats();
  renderTable();
}

function renderLevels() {
  els.levelList.innerHTML = levels
    .map(
      (level) => `
      <div class="level-item">
        <span class="level-code" style="background:${level.color}">${level.code}</span>
        <span><strong>${level.name}</strong><span>${level.desc}</span></span>
      </div>
    `,
    )
    .join("");
}

function fillLevelOptions() {
  const options = levels
    .map((level) => `<option value="${level.code}">${level.code} ${level.name}</option>`)
    .join("");
  els.levelFilter.insertAdjacentHTML("beforeend", options);
  els.productForm.elements.level.innerHTML = options;
}

function populateFilters() {
  populateSelect(els.categoryFilter, "全部品类", uniqueValues("category"), state.filters.category);
  populateSelect(els.brandFilter, "全部品牌", uniqueValues("brand"), state.filters.brand);
  els.levelFilter.value = state.filters.level;
}

function populateSelect(select, placeholder, values, selected) {
  select.innerHTML = `<option value="">${placeholder}</option>${values
    .map((value) => `<option value="${escapeAttr(value)}">${escapeHtml(value)}</option>`)
    .join("")}`;
  select.value = selected;
}

function uniqueValues(key) {
  return [...new Set(state.products.map((product) => product[key]).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "zh-CN"),
  );
}

function renderSummary() {
  const total = state.products.length;
  const selected = state.products.filter((product) => product.selected).length;
  els.totalBadge.textContent = formatNumber(total);
  els.totalCount.textContent = formatNumber(total);
  els.donutTotal.textContent = formatNumber(total);
  els.allCount.textContent = `(${formatNumber(total)})`;
  els.selectedCount.textContent = `(${formatNumber(selected)})`;
  els.unselectedCount.textContent = `(${formatNumber(total - selected)})`;
}

function renderStats() {
  const total = Math.max(state.products.length, 1);
  const counts = levels.map((level) => ({
    ...level,
    count: state.products.filter((product) => product.level === level.code).length,
  }));
  let start = 0;
  const gradient = counts
    .map((item) => {
      const percent = (item.count / total) * 100;
      const stop = start + percent;
      const segment = `${item.color} ${start.toFixed(2)}% ${stop.toFixed(2)}%`;
      start = stop;
      return segment;
    })
    .join(", ");
  els.donutChart.style.background = `conic-gradient(${gradient || "#e2e8f0 0 100%"})`;
  els.legendList.innerHTML = counts
    .map((item) => {
      const percent = state.products.length ? ((item.count / state.products.length) * 100).toFixed(1) : "0.0";
      return `
        <span class="legend-item">
          <span class="legend-dot" style="background:${item.color}"></span>
          ${item.count} (${percent}%)
        </span>
      `;
    })
    .join("");
}

function renderTable() {
  const products = getFilteredProducts();
  applySort(products);
  const totalPages = getTotalPages(products);
  if (state.page > totalPages) state.page = totalPages;
  const paged = getPagedProducts(products);

  els.productRows.innerHTML = paged.map(renderRow).join("");
  els.visibleCount.textContent = formatNumber(products.length);
  renderPager(totalPages);
  els.selectPage.checked = paged.length > 0 && paged.every((product) => product.selected);
  els.selectPage.indeterminate = paged.some((product) => product.selected) && !els.selectPage.checked;
  els.emptyState.parentElement.classList.toggle("empty", products.length === 0);
  renderSortIndicators();

  els.productRows.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => openProductModal(Number(button.dataset.edit)));
  });

  els.productRows.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteProduct(Number(button.dataset.delete)));
  });

  els.productRows.querySelectorAll("[data-select]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const product = state.products.find((item) => item.id === Number(checkbox.dataset.select));
      if (product) {
        product.selected = checkbox.checked;
        saveProducts();
        renderAll();
      }
    });
  });
}

function renderPager(totalPages) {
  const pages = getPaginationItems(state.page, totalPages);
  els.pager.innerHTML = [
    `<button class="pager-arrow" data-page="prev" ${state.page <= 1 ? "disabled" : ""}>‹</button>`,
    ...pages.map((page) =>
      page === "..."
        ? `<span class="pager-ellipsis">...</span>`
        : `<button class="pager-page ${page === state.page ? "active" : ""}" data-page="${page}">${page}</button>`,
    ),
    `<button class="pager-arrow" data-page="next" ${state.page >= totalPages ? "disabled" : ""}>›</button>`,
  ].join("");
}

function getPaginationItems(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);
  if (current <= 4) return [1, 2, 3, 4, "...", total - 1, total];
  if (current >= total - 3) return [1, 2, "...", total - 3, total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

function bindSorting() {
  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.sort;
      if (state.sort.key === key) {
        state.sort.direction = state.sort.direction === "asc" ? "desc" : "asc";
      } else {
        state.sort.key = key;
        state.sort.direction = "asc";
      }
      state.page = 1;
      renderAll();
    });
  });
}

function applySort(products) {
  if (!state.sort.key) return products;
  const direction = state.sort.direction === "asc" ? 1 : -1;
  const levelOrder = Object.fromEntries(levels.map((level, index) => [level.code, index]));
  products.sort((a, b) => {
    let left;
    let right;
    if (state.sort.key === "category") {
      left = `${a.category}${a.subCategory}`;
      right = `${b.category}${b.subCategory}`;
      return left.localeCompare(right, "zh-CN") * direction;
    }
    if (state.sort.key === "level") {
      left = levelOrder[a.level] ?? 99;
      right = levelOrder[b.level] ?? 99;
      return (left - right) * direction;
    }
    left = Number(a[state.sort.key]);
    right = Number(b[state.sort.key]);
    return (left - right) * direction;
  });
  return products;
}

function renderSortIndicators() {
  document.querySelectorAll("[data-sort]").forEach((button) => {
    button.classList.toggle("active", button.dataset.sort === state.sort.key);
  });
  document.querySelectorAll("[data-sort-icon]").forEach((icon) => {
    icon.textContent = icon.dataset.sortIcon === state.sort.key ? (state.sort.direction === "asc" ? "↑" : "↓") : "↕";
  });
}

function renderRow(product) {
  const level = findLevel(product.level);
  const image = getProductImageSrc(product);
  return `
    <tr>
      <td>
        <div class="product-info">
          <div class="product-thumb">
            <img src="${escapeAttr(image)}" alt="${escapeAttr(product.name)}" onerror="this.onerror=null;this.src='${escapeAttr(buildSvgPlaceholder(product))}'">
          </div>
          <div>
            <strong class="product-name">${escapeHtml(product.name)}</strong>
            <div class="product-meta">
              <span>${escapeHtml(product.brand)}</span>
              <span>条码：${escapeHtml(product.barcode)}</span>
              <span>更新时间：${escapeHtml(product.updatedAt)}</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="category-lines">
          <span>${escapeHtml(product.category)}</span>
          <span>${escapeHtml(product.subCategory)}</span>
        </div>
      </td>
      <td>
        <span class="level-pill" style="color:${level.color}; background:${level.soft}">
          <strong>${level.code}</strong>${level.name}
        </span>
      </td>
      <td class="price">￥${formatPrice(product.salePrice)}</td>
      <td class="price">￥${formatPrice(product.costPrice)}</td>
      <td>
        <div class="row-actions">
          <button class="edit-btn" data-edit="${product.id}">编辑</button>
          <button class="delete-btn" data-delete="${product.id}">删除</button>
        </div>
      </td>
      <td><input type="checkbox" data-select="${product.id}" ${product.selected ? "checked" : ""}></td>
    </tr>
  `;
}

function getFilteredProducts() {
  const keyword = state.filters.keyword.toLowerCase();
  return state.products.filter((product) => {
    const matchesKeyword =
      !keyword ||
      [product.name, product.brand, product.barcode, product.category, product.subCategory]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    const matchesLevel = !state.filters.level || product.level === state.filters.level;
    const matchesCategory = !state.filters.category || product.category === state.filters.category;
    const matchesBrand = !state.filters.brand || product.brand === state.filters.brand;
    const matchesTab =
      state.filters.tab === "all" ||
      (state.filters.tab === "selected" && product.selected) ||
      (state.filters.tab === "unselected" && !product.selected);
    return matchesKeyword && matchesLevel && matchesCategory && matchesBrand && matchesTab;
  });
}

function getPagedProducts(products = getFilteredProducts()) {
  const start = (state.page - 1) * state.pageSize;
  return products.slice(start, start + state.pageSize);
}

function getTotalPages(products = getFilteredProducts()) {
  return Math.max(1, Math.ceil(products.length / state.pageSize));
}

function openProductModal(id = null) {
  state.editingId = id;
  const form = els.productForm;
  form.reset();
  els.modalTitle.textContent = id ? "编辑商品" : "添加商品";
  const product = state.products.find((item) => item.id === id);
  if (product) {
    Object.entries(product).forEach(([key, value]) => {
      if (form.elements[key] && key !== "selected") {
        form.elements[key].value = value;
      }
    });
  } else {
    form.elements.level.value = "C";
    form.elements.updatedAt.value = new Date().toISOString().slice(0, 10);
  }
  els.productModal.classList.add("show");
  els.productModal.setAttribute("aria-hidden", "false");
  setTimeout(() => form.elements.name.focus(), 30);
}

function closeProductModal() {
  closeAllModals();
}

function closeAllModals() {
  [els.productModal, els.imageSettingsModal, els.purchaseModal, els.accountModal].forEach((modal) => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  });
  state.editingId = null;
}

function saveFormProduct(event) {
  event.preventDefault();
  const form = els.productForm;
  const payload = {
    name: form.elements.name.value.trim(),
    brand: form.elements.brand.value.trim(),
    barcode: form.elements.barcode.value.trim(),
    category: form.elements.category.value.trim(),
    subCategory: form.elements.subCategory.value.trim(),
    level: form.elements.level.value,
    salePrice: Number(form.elements.salePrice.value),
    costPrice: Number(form.elements.costPrice.value),
    image: form.elements.image.value.trim(),
    updatedAt: form.elements.updatedAt.value,
  };
  const requiredValues = { ...payload };
  delete requiredValues.image;
  if (Object.values(requiredValues).some((value) => value === "" || Number.isNaN(value))) {
    toast("请填写完整商品信息");
    return;
  }

  if (state.editingId) {
    const product = state.products.find((item) => item.id === state.editingId);
    Object.assign(product, payload);
    toast("商品信息已更新");
  } else {
    state.products.unshift({
      id: Date.now(),
      selected: false,
      color: randomColor(),
      ...payload,
    });
    toast("商品已添加");
  }
  saveProducts();
  closeAllModals();
  renderAll();
}

function deleteProduct(id) {
  const product = state.products.find((item) => item.id === id);
  if (!product) return;
  const confirmed = window.confirm(`确定删除「${product.name}」吗？`);
  if (!confirmed) return;
  state.products = state.products.filter((item) => item.id !== id);
  saveProducts();
  renderAll();
  toast("商品已删除");
}

function batchEdit() {
  const selected = state.products.filter((product) => product.selected);
  if (!selected.length) {
    toast("请先勾选需要批量编辑的商品");
    return;
  }
  const nextLevel = window.prompt("输入要批量设置的等级（A-G）：", "C");
  if (!nextLevel) return;
  const level = nextLevel.trim().toUpperCase();
  if (!levels.some((item) => item.code === level)) {
    toast("等级必须是 A 到 G");
    return;
  }
  selected.forEach((product) => {
    product.level = level;
    product.updatedAt = new Date().toISOString().slice(0, 10);
  });
  saveProducts();
  renderAll();
  toast(`已批量更新 ${selected.length} 个商品`);
}

function batchDelete() {
  const selected = state.products.filter((product) => product.selected);
  if (!selected.length) {
    toast("请先勾选需要删除的商品");
    return;
  }
  const confirmed = window.confirm(`确定删除已选中的 ${selected.length} 个商品吗？`);
  if (!confirmed) return;
  const selectedIds = new Set(selected.map((product) => product.id));
  state.products = state.products.filter((product) => !selectedIds.has(product.id));
  saveProducts();
  renderAll();
  toast("已批量删除选中商品");
}

function openImageSettings() {
  renderImagePreviewList();
  els.imageSettingsModal.classList.add("show");
  els.imageSettingsModal.setAttribute("aria-hidden", "false");
}

function bindImageSettings() {
  els.chooseImagesBtn.addEventListener("click", () => els.imageUpload.click());
  els.imageUpload.addEventListener("change", () => handleImageFiles(els.imageUpload.files));
  ["dragenter", "dragover"].forEach((eventName) => {
    els.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropZone.classList.add("dragover");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    els.dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      els.dropZone.classList.remove("dragover");
    });
  });
  els.dropZone.addEventListener("drop", (event) => handleImageFiles(event.dataTransfer.files));
  els.autoImageBtn.addEventListener("click", autoUpdateImages);
  els.imagePreviewList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-save-image-url]");
    if (!button) return;
    const id = Number(button.dataset.saveImageUrl);
    const input = els.imagePreviewList.querySelector(`[data-image-url="${id}"]`);
    const product = state.products.find((item) => item.id === id);
    if (!product || !input) return;
    const value = input.value.trim();
    if (!hasDirectImage(value)) {
      toast("请粘贴真实图片地址，不要粘贴 Bing 搜索页面链接");
      return;
    }
    product.image = value;
    product.updatedAt = new Date().toISOString().slice(0, 10);
    saveProducts();
    renderAll();
    renderImagePreviewList();
    toast("商品图片地址已保存");
  });
}

function handleImageFiles(fileList) {
  const files = [...fileList].filter((file) => file.type.startsWith("image/"));
  if (!files.length) {
    toast("请上传图片文件");
    return;
  }
  let updated = 0;
  let finished = 0;
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const product = matchProductByFileName(file.name);
      if (product) {
        product.image = reader.result;
        product.updatedAt = new Date().toISOString().slice(0, 10);
        updated += 1;
      }
      finished += 1;
      if (finished === files.length) {
        saveProducts();
        renderAll();
        renderImagePreviewList();
        toast(`已上传并匹配 ${updated} 张商品图片`);
      }
    };
    reader.readAsDataURL(file);
  });
}

function matchProductByFileName(fileName) {
  const normalized = fileName.replace(/\.[^.]+$/, "").toLowerCase();
  return (
    state.products.find((product) => normalized.includes(product.name.toLowerCase())) ||
    state.products.find((product) => normalized.includes(product.brand.toLowerCase())) ||
    state.products.find((product) => product.name.toLowerCase().includes(normalized)) ||
    state.products[0]
  );
}

function autoUpdateImages() {
  const targets = getFilteredProducts();
  if (els.imageUpdateMode.value === "manual") {
    renderImagePreviewList();
    toast("已切换为手动模式，可上传或粘贴图片地址");
    return;
  }
  targets.forEach((product) => {
    product.imageSearchUrl = buildBingImageSearchUrl(product);
    product.image = buildBingThumbnailUrl(product);
    product.updatedAt = new Date().toISOString().slice(0, 10);
  });
  saveProducts();
  renderAll();
  renderImagePreviewList();
  toast(`已为 ${targets.length} 个商品自动更新图片`);
}

function buildBingImageSearchUrl(product) {
  const query = encodeURIComponent(`${product.brand} ${product.name}`);
  return `https://cn.bing.com/images/search?q=${query}&qpvt=${query}&form=IGRE&first=1`;
}

function buildBingThumbnailUrl(product) {
  const query = encodeURIComponent(`${product.brand} ${product.name}`);
  return `https://tse1.mm.bing.net/th?q=${query}&w=160&h=160&c=7&rs=1&p=0&o=5&pid=1.7`;
}

function renderImagePreviewList() {
  els.imagePreviewList.innerHTML = state.products
    .slice(0, 15)
    .map((product) => {
      const image = getProductImageSrc(product);
      const searchUrl = product.imageSearchUrl || buildBingImageSearchUrl(product);
      return `
        <div class="image-preview-item">
          <img src="${escapeAttr(image)}" alt="${escapeAttr(product.name)}" onerror="this.onerror=null;this.src='${escapeAttr(buildSvgPlaceholder(product))}'">
          <div>
            <strong>${escapeHtml(product.name)}</strong>
            <span>${hasDirectImage(product.image) ? "已设置图片" : "待粘贴真实图片地址"} · 最后更新：${escapeHtml(product.updatedAt || "-")}</span>
            <div class="image-preview-actions">
              <a href="${escapeAttr(searchUrl)}" target="_blank" rel="noreferrer">打开搜图</a>
              <button type="button" data-save-image-url="${product.id}">保存地址</button>
            </div>
            <input class="image-url-input" data-image-url="${product.id}" placeholder="粘贴真实图片地址" value="${hasDirectImage(product.image) ? escapeAttr(product.image) : ""}">
          </div>
        </div>
      `;
    })
    .join("");
}

function openPurchaseModal() {
  const selected = state.products.filter((product) => product.selected);
  if (!selected.length) {
    toast("请先选择要生成采购单的商品");
    return;
  }
  els.purchaseDate.value = new Date().toISOString().slice(0, 10);
  els.buyerName.value = state.account.displayName;
  selected.forEach((product) => {
    if (!state.purchaseQuantities[product.id]) state.purchaseQuantities[product.id] = 1;
  });
  renderPurchaseRows();
  els.purchaseModal.classList.add("show");
  els.purchaseModal.setAttribute("aria-hidden", "false");
}

function bindPurchaseExport() {
  els.purchaseRows.addEventListener("input", (event) => {
    if (!event.target.matches("[data-purchase-qty]")) return;
    state.purchaseQuantities[event.target.dataset.purchaseQty] = Math.max(1, Number(event.target.value || 1));
    renderPurchaseText();
  });
  [els.supplierName, els.buyerName, els.purchaseDate].forEach((input) => {
    input.addEventListener("input", renderPurchaseText);
  });
  els.copyXlsxTextBtn.addEventListener("click", copyPurchaseText);
  els.downloadXlsxTextBtn.addEventListener("click", downloadPurchaseText);
}

function renderPurchaseRows() {
  const selected = state.products.filter((product) => product.selected);
  els.purchaseRows.innerHTML = selected
    .map((product) => {
      const qty = state.purchaseQuantities[product.id] || 1;
      const subtotal = qty * Number(product.costPrice);
      return `
        <tr>
          <td><img class="purchase-img" src="${escapeAttr(getProductImageSrc(product))}" alt="${escapeAttr(product.name)}" onerror="this.onerror=null;this.src='${escapeAttr(buildSvgPlaceholder(product))}'"></td>
          <td>
            <strong>${escapeHtml(product.name)}</strong>
            <div class="product-meta">
              <span>${escapeHtml(product.brand)} / ${escapeHtml(product.category)}-${escapeHtml(product.subCategory)}</span>
              <span>条码：${escapeHtml(product.barcode)}</span>
            </div>
          </td>
          <td>${escapeHtml(product.level)}</td>
          <td>￥${formatPrice(product.costPrice)}</td>
          <td><input class="purchase-qty" data-purchase-qty="${product.id}" type="number" min="1" value="${qty}"></td>
          <td class="price">￥${formatPrice(subtotal)}</td>
        </tr>
      `;
    })
    .join("");
  renderPurchaseText();
}

function renderPurchaseText() {
  const selected = state.products.filter((product) => product.selected);
  const headerLines = [
    "便利店采购单",
    `供应商\t${els.supplierName.value || ""}`,
    `采购人\t${els.buyerName.value || ""}`,
    `采购日期\t${els.purchaseDate.value || ""}`,
    "",
    "序号\t商品名称\t品牌\t条码\t一级分类\t二级分类\t等级\t图片\t图片搜索\t进货价\t采购数量\t小计\t更新时间",
  ];
  const rows = selected.map((product, index) => {
    const qty = state.purchaseQuantities[product.id] || 1;
    const subtotal = qty * Number(product.costPrice);
    return [
      index + 1,
      product.name,
      product.brand,
      product.barcode,
      product.category,
      product.subCategory,
      product.level,
      hasDirectImage(product.image) ? product.image : "",
      product.imageSearchUrl || buildBingImageSearchUrl(product),
      formatPrice(product.costPrice),
      qty,
      formatPrice(subtotal),
      product.updatedAt,
    ].join("\t");
  });
  const total = selected.reduce((sum, product) => sum + (state.purchaseQuantities[product.id] || 1) * Number(product.costPrice), 0);
  els.xlsxText.value = [...headerLines, ...rows, "", `合计金额\t${formatPrice(total)}`].join("\n");
}

function copyPurchaseText() {
  els.xlsxText.select();
  document.execCommand("copy");
  toast("采购单文本已复制，可粘贴到 Excel/WPS");
}

async function downloadPurchaseText() {
  renderPurchaseText();
  const workbook = await buildPurchaseWorkbookHtml();
  const blob = new Blob([`\ufeff${workbook}`], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `便利店采购单_${new Date().toISOString().slice(0, 10)}.xlsx`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast("xlsx 采购单已生成，图片已嵌入表格显示");
}

async function buildPurchaseWorkbookHtml() {
  const selected = state.products.filter((product) => product.selected);
  const imageMap = await buildExportImageMap(selected);
  const rows = selected
    .map((product, index) => {
      const qty = state.purchaseQuantities[product.id] || 1;
      const subtotal = qty * Number(product.costPrice);
      const image = imageMap[product.id] || getProductImageSrc(product);
      return `
        <tr>
          <td>${index + 1}</td>
          <td><img src="${escapeAttr(image)}" width="58" height="58"></td>
          <td>${escapeHtml(product.name)}</td>
          <td>${escapeHtml(product.brand)}</td>
          <td>${escapeHtml(product.barcode)}</td>
          <td>${escapeHtml(product.category)}</td>
          <td>${escapeHtml(product.subCategory)}</td>
          <td>${escapeHtml(product.level)}</td>
          <td>${formatPrice(product.costPrice)}</td>
          <td>${qty}</td>
          <td>${formatPrice(subtotal)}</td>
          <td>${escapeHtml(product.updatedAt)}</td>
        </tr>
      `;
    })
    .join("");
  const total = selected.reduce((sum, product) => sum + (state.purchaseQuantities[product.id] || 1) * Number(product.costPrice), 0);
  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          table { border-collapse: collapse; font-family: "Microsoft YaHei", Arial, sans-serif; }
          td, th { border: 1px solid #d9e2ec; padding: 8px; mso-number-format:"\\@"; }
          th { background: #eaf4ff; font-weight: 700; }
          img { object-fit: contain; }
          .title { font-size: 20px; font-weight: 700; text-align: center; }
        </style>
      </head>
      <body>
        <table>
          <tr><td class="title" colspan="12">便利店采购单</td></tr>
          <tr><td colspan="2">供应商</td><td colspan="4">${escapeHtml(els.supplierName.value || "")}</td><td colspan="2">采购人</td><td colspan="4">${escapeHtml(els.buyerName.value || "")}</td></tr>
          <tr><td colspan="2">采购日期</td><td colspan="4">${escapeHtml(els.purchaseDate.value || "")}</td><td colspan="2">合计金额</td><td colspan="4">${formatPrice(total)}</td></tr>
          <tr>
            <th>序号</th><th>图片</th><th>商品名称</th><th>品牌</th><th>条码</th><th>一级分类</th><th>二级分类</th><th>等级</th><th>进货价</th><th>采购数量</th><th>小计</th><th>更新时间</th>
          </tr>
          ${rows}
        </table>
      </body>
    </html>
  `;
}

async function buildExportImageMap(products) {
  const entries = await Promise.all(
    products.map(async (product) => {
      const visibleImage = getProductImageSrc(product);
      const embeddedImage = await imageToDataUrl(visibleImage);
      return [product.id, embeddedImage || visibleImage];
    }),
  );
  return Object.fromEntries(entries);
}

function imageToDataUrl(src) {
  if (!src || src.startsWith("data:image/")) return Promise.resolve(src);
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth || 160;
        canvas.height = image.naturalHeight || 160;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/png"));
      } catch {
        resolve(src);
      }
    };
    image.onerror = () => resolve(src);
    image.src = src;
  });
}

function bindAccountEvents() {
  els.accountButton.addEventListener("click", (event) => {
    event.stopPropagation();
    els.accountMenu.classList.toggle("show");
    els.accountMenu.setAttribute("aria-hidden", String(!els.accountMenu.classList.contains("show")));
  });
  document.addEventListener("click", () => {
    els.accountMenu.classList.remove("show");
    els.accountMenu.setAttribute("aria-hidden", "true");
  });
  els.accountMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    const button = event.target.closest("[data-account-action]");
    if (!button) return;
    const action = button.dataset.accountAction;
    els.accountMenu.classList.remove("show");
    if (action === "logout") {
      logoutAccount();
      return;
    }
    openAccountModal(action);
  });
  document.querySelectorAll("[data-account-tab]").forEach((tab) => {
    tab.addEventListener("click", () => setAccountTab(tab.dataset.accountTab));
  });
  els.accountForm.addEventListener("submit", saveAccountForm);
}

function openAccountModal(tab = "profile") {
  renderAccount();
  setAccountTab(tab);
  els.accountModal.classList.add("show");
  els.accountModal.setAttribute("aria-hidden", "false");
}

function setAccountTab(tab) {
  document.querySelectorAll("[data-account-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.accountTab === tab);
  });
  document.querySelectorAll("[data-account-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.accountPanel === tab);
  });
  const titleMap = { profile: "个人设置" };
  els.accountModalTitle.textContent = titleMap[tab] || "账号管理";
}

function renderAccount() {
  els.accountName.textContent = state.account.displayName;
  els.accountMenuName.textContent = state.account.displayName;
  els.accountMenuEmail.textContent = state.account.email;
  els.profileDisplayName.textContent = state.account.displayName;
  els.profileDisplayEmail.textContent = state.account.email;
  els.accountForm.elements.displayName.value = state.account.displayName;
  els.accountForm.elements.email.value = state.account.email;
  els.accountForm.elements.phone.value = state.account.phone;
  els.accountForm.elements.storeName.value = state.account.storeName;
  els.accountForm.elements.role.value = state.account.role;
  els.accountForm.elements.language.value = state.account.language;
}

function saveAccountForm(event) {
  event.preventDefault();
  const form = els.accountForm;
  state.account.displayName = form.elements.displayName.value.trim();
  state.account.email = form.elements.email.value.trim();
  state.account.phone = form.elements.phone.value.trim();
  state.account.storeName = form.elements.storeName.value.trim();
  state.account.role = form.elements.role.value;
  state.account.language = form.elements.language.value;
  saveAccount();
  renderAccount();
  toast("账号设置已保存");
}

function logoutAccount() {
  const confirmed = window.confirm("确定退出当前账号吗？");
  if (!confirmed) return;
  toast("已退出账号，当前为本地演示状态");
}

function importProducts() {
  const sample = {
    id: Date.now(),
    name: "新品 便携雨伞",
    brand: "门店精选",
    barcode: `88${Math.floor(Math.random() * 10000000000)}`,
    category: "季节百货",
    subCategory: "雨具",
    level: "D",
    salePrice: 19.9,
    costPrice: 11.6,
    updatedAt: new Date().toISOString().slice(0, 10),
    selected: false,
    color: "#22c55e",
    image: "",
  };
  state.products.unshift(sample);
  saveProducts();
  renderAll();
  toast("已模拟导入 1 个商品，可继续编辑");
}

function setActiveTab(tab) {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
}

function findLevel(code) {
  return levels.find((level) => level.code === code) || levels[2];
}

function formatNumber(value) {
  return Number(value).toLocaleString("zh-CN");
}

function formatPrice(value) {
  return Number(value).toFixed(2).replace(/\.00$/, ".00");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function randomColor() {
  const colors = ["#dc2626", "#f97316", "#facc15", "#22c55e", "#15b8ca", "#2563eb", "#8b5cf6", "#64748b"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function buildSvgPlaceholder(product) {
  const level = findLevel(product.level);
  const text = escapeHtml(product.brand.slice(0, 4));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" rx="16" fill="#f8fafc"/><rect x="46" y="24" width="68" height="112" rx="14" fill="${product.color || level.color}"/><rect x="52" y="44" width="56" height="48" rx="8" fill="white" fill-opacity=".92"/><text x="80" y="75" text-anchor="middle" font-size="18" font-family="Arial, sans-serif" font-weight="700" fill="#1e293b">${text}</text><rect x="56" y="104" width="48" height="12" rx="6" fill="white" fill-opacity=".75"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function getProductImageSrc(product) {
  return hasDirectImage(product.image) ? product.image : buildSvgPlaceholder(product);
}

function hasDirectImage(value) {
  if (!value) return false;
  const url = String(value).trim();
  if (url.startsWith("data:image/")) return true;
  if (!/^https?:\/\//i.test(url)) return false;
  if (/bing\.com\/images\/search/i.test(url)) return false;
  if (/source\.unsplash\.com|placehold\.co/i.test(url)) return false;
  if (/tse\d?\.mm\.bing\.net\/th/i.test(url)) return true;
  return /\.(png|jpe?g|webp|gif|avif|svg)(\?.*)?$/i.test(url) || /[?&](format|fm|image|img)=/i.test(url);
}

let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2200);
}
