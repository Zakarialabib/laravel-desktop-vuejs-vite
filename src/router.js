import Vue from "vue";
import store from "./store";
import Router from "vue-router";

import Dashboard from './views/app/dashboard/dashboard.vue'
import Products from './views/app/pages/products/index_products.vue'
import AddProduct from './views/app/pages/products/Add_product.vue'
import EditProduct from './views/app/pages/products/Edit_product.vue'
import LeaveList from './views/app/pages/hrm/leaves/leave_list.vue'
import LeaveType from './views/app/pages/hrm/leaves/leave_type.vue'
import Backup from './views/app/pages/settings/backup.vue'
import SystemSettings from './views/app/pages/settings/system_settings.vue'
import NotAuthorize from './views/app/pages/NotAuthorize.vue'
import { i18n } from "./plugins/i18n";
import authenticate from "./auth/authenticate";
import IsConnected from "./auth/IsConnected";
import NProgress from "nprogress";
Vue.use(Router);

// create new router

const routes = [
    {
        path: "/",
        redirect: "/app/dashboard",

        children: [
            {
                path: "/app/dashboard",
                name: "dashboard",
                component: Dashboard,
            },

            //Products
            {
                path: "/app/products",
                redirect: "app/products/list",
                children: [
                    {
                        name: "index_products",
                        path: "list",
                        component: Products,
                    },
                    {
                        path: "store",
                        name: "store_product",
                        component: AddProduct,
                    },
                    {
                        path: "edit/:id",
                        name: "edit_product",
                        component: EditProduct,
                         
                    },
                    {
                        path: "detail/:id",
                        name: "detail_product",
                        component: () =>
                            import(
                               "./views/app/pages/products/Detail_Product.vue"
                            )
                    },
                    {
                        path: "barcode",
                        name: "barcode",
                        component: () =>
                            import(
                                "./views/app/pages/products/barcode.vue"
                            )
                    },
                     // categories
                     {
                        name: "categories",
                        path: "Categories",
                        component: () =>
                            import(
                                 "./views/app/pages/products/categorie.vue"
                            )
                    },

                    // brands
                    {
                        name: "brands",
                        path: "Brands",
                        component: () =>
                            import(
                                "./views/app/pages/products/brands.vue"
                            )
                    },

                    // units
                    {
                        name: "units",
                        path: "Units",
                        component: () =>
                            import(
                                 "./views/app/pages/products/units.vue"
                            )
                    },
                ]
            },

            //Adjustement
            {
                path: "/app/adjustments",
                redirect: "/app/adjustments/list",
                children: [
                    {
                        name: "index_adjustment",
                        path: "list",
                        component: () =>
                            import(
                                "./views/app/pages/adjustment/index_Adjustment.vue"
                            )
                    },
                    {
                        name: "store_adjustment",
                        path: "store",
                        component: () =>
                            import(
                                "./views/app/pages/adjustment/Create_Adjustment.vue"
                            )
                    },
                    {
                        name: "edit_adjustment",
                        path: "edit/:id",
                        component: () =>
                            import(
                                "./views/app/pages/adjustment/Edit_Adjustment.vue"
                            )
                    }
                ]
            },

            //Transfer
            {
                path: "/app/transfers",
                redirect: "/app/transfers/list",
                children: [
                    {
                        name: "index_transfer",
                        path: "list",
                        component: () =>
                            import(
                                 "./views/app/pages/transfers/index_transfer.vue"
                            )
                    },
                    {
                        name: "store_transfer",
                        path: "store",
                        component: () =>
                            import(
                                "./views/app/pages/transfers/create_transfer.vue"
                            )
                    },
                    {
                        name: "edit_transfer",
                        path: "edit/:id",
                        component: () =>
                            import(
                                "./views/app/pages/transfers/edit_transfer.vue"
                            )
                    }
                ]
            },

            //Expense
            {
                path: "/app/expenses",
                redirect: "/app/expenses/list",
                children: [
                    {
                        name: "index_expense",
                        path: "list",
                        component: () =>
                            import(
                                 "./views/app/pages/expense/index_expense.vue"
                            )
                    },
                    {
                        name: "store_expense",
                        path: "store",
                        component: () =>
                            import(
                               "./views/app/pages/expense/create_expense.vue"
                            )
                    },
                    {
                        name: "edit_expense",
                        path: "edit/:id",
                        component: () =>
                            import(
                                 "./views/app/pages/expense/edit_expense.vue"
                            )
                    },
                    {
                        name: "expense_category",
                        path: "category",
                        component: () =>
                            import(
                                 "./views/app/pages/expense/category_expense.vue"
                            )
                    }
                ]
            },

            //Quotation
            {
                path: "/app/quotations",
                redirect: "/app/quotations/list",
                children: [
                    {
                        name: "index_quotation",
                        path: "list",
                        component: () =>
                            import(
                                "./views/app/pages/quotations/index_quotation.vue"
                            )
                    },
                    {
                        name: "store_quotation",
                        path: "store",
                        component: () =>
                            import(
                                "./views/app/pages/quotations/create_quotation.vue"
                            )
                    },
                    {
                        name: "edit_quotation",
                        path: "edit/:id",
                        component: () =>
                            import(
                                "./views/app/pages/quotations/edit_quotation.vue"
                            )
                    },
                    {
                        name: "detail_quotation",
                        path: "detail/:id",
                        component: () =>
                            import(
                                "./views/app/pages/quotations/detail_quotation.vue"
                            )
                    },
                    {
                        name: "change_to_sale",
                        path: "create_sale/:id",
                        component: () =>
                            import(
                                "./views/app/pages/sales/change_to_sale.vue"
                            )
                    }
                ]
            },

            //Purchase
            {
                path: "/app/purchases",
                redirect: "/app/purchases/list",
                children: [
                    {
                        name: "index_purchases",
                        path: "list",
                        component: () =>
                            import(
                                 "./views/app/pages/purchases/index_purchase.vue"
                            )
                    },
                    {
                        name: "store_purchase",
                        path: "store",
                        component: () =>
                            import(
                                "./views/app/pages/purchases/create_purchase.vue"
                            )
                    },
                    {
                        name: "edit_purchase",
                        path: "edit/:id",
                        component: () =>
                            import(
                                 "./views/app/pages/purchases/edit_purchase.vue"
                            )
                    },
                    {
                        name: "detail_purchase",
                        path: "detail/:id",
                        component: () =>
                            import(
                                "./views/app/pages/purchases/detail_purchase.vue"
                            )
                    }
                ]
            },

            //Sale
            {
                path: "/app/sales",
                redirect: "/app/sales/list",
                children: [
                    {
                        name: "index_sales",
                        path: "list",
                        component: () =>
                            import(
                                 "./views/app/pages/sales/index_sale.vue"
                            )
                    },
                    {
                        name: "store_sale",
                        path: "store",
                        component: () =>
                            import(
                                "./views/app/pages/sales/create_sale.vue"
                            )
                    },
                    {
                        name: "edit_sale",
                        path: "edit/:id",
                        component: () =>
                            import(
                                 "./views/app/pages/sales/edit_sale.vue"
                            )
                    },
                    {
                        name: "detail_sale",
                        path: "detail/:id",
                        component: () =>
                            import(
                                 "./views/app/pages/sales/detail_sale.vue"
                            )
                    },
                    {
                        name: "shipment",
                        path: "shipment",
                        component: () =>
                            import(
                                 "./views/app/pages/sales/shipments.vue"
                            )
                    }
                ]
            },

            // Sales Return
            {
                path: "/app/sale_return",
                redirect: "/app/sale_return/list",
                children: [
                    {
                        name: "index_sale_return",
                        path: "list",
                        component: () =>
                            import(
                                "./views/app/pages/sale_return/index_sale_return.vue"
                            )
                    },
                    {
                        name: "store_sale_return",
                        path: "store",
                        component: () =>
                            import(
                                "./views/app/pages/sale_return/create_sale_return.vue"
                            )
                    },
                    {
                        name: "edit_sale_return",
                        path: "edit/:id",
                        component: () =>
                            import(
                                "./views/app/pages/sale_return/edit_sale_return.vue"
                            )
                    },
                    {
                        name: "detail_sale_return",
                        path: "detail/:id",
                        component: () =>
                            import(
                                "./views/app/pages/sale_return/detail_sale_return.vue"
                            )
                    }
                ]
            },

            // purchase Return
            {
                path: "/app/purchase_return",
                redirect: "/app/purchase_return/list",
                children: [
                    {
                        name: "index_purchase_return",
                        path: "list",
                        component: () =>
                            import(
                                "./views/app/pages/purchase_return/index_purchase_return.vue"
                            )
                    },
                    {
                        name: "store_purchase_return",
                        path: "store",
                        component: () =>
                            import(
                                "./views/app/pages/purchase_return/create_purchase_return.vue"
                            )
                    },
                    {
                        name: "edit_purchase_return",
                        path: "edit/:id",
                        component: () =>
                            import(
                                "./views/app/pages/purchase_return/edit_purchase_return.vue"
                            )
                    },
                    {
                        name: "detail_purchase_return",
                        path: "detail/:id",
                        component: () =>
                            import(
                                "./views/app/pages/purchase_return/detail_purchase_return.vue"
                            )
                    }
                ]
            },

            // Hrm
            {
                path: "/app/hrm",
                redirect: "/app/hrm/employees",
                children: [
                    // employees
                    {
                        path: "employees",
                        redirect: "/app/hrm/employees/list",
                        children: [
                            {
                                name: "employees_list",
                                path: "list",
                                component: () =>
                                    import(
                                        "./views/app/pages/hrm/employees/index_employee.vue"
                                    )
                            },
                            {
                                name: "store_employee",
                                path: "store",
                                component: () =>
                                    import(
                                        "./views/app/pages/hrm/employees/employee_create.vue"
                                    )
                            },
                            {
                                name: "edit_employee",
                                path: "edit/:id",
                                component: () =>
                                    import(
                                        "./views/app/pages/hrm/employees/employee_edit.vue"
                                    )
                            },
                            {
                                name: "detail_employee",
                                path: "detail/:id",
                                component: () =>
                                    import(
                                        "./views/app/pages/hrm/employees/employee_details.vue"
                                    )
                            },
                        ]
                    },
                    // company
                    {
                        name: "company",
                        path: "company",
                        component: () =>
                            import(
                                "./views/app/pages/hrm/company.vue"
                                )
                    },

                    // departments
                    {
                        name: "departments",
                        path: "departments",
                        component: () =>
                            import(
                                "./views/app/pages/hrm/department.vue"
                                )
                    },

                      // designations
                      {
                        name: "designations",
                        path: "designations",
                        component: () =>
                            import(
                                "./views/app/pages/hrm/designation.vue"
                                )
                    },

                    // office_shift
                    {
                        name: "office_shift",
                        path: "office_shift",
                        component: () =>
                            import(
                            "./views/app/pages/hrm/office_shift.vue"
                            )
                    },

                     // attendance
                     {
                        name: "attendance",
                        path: "attendance",
                        component: () =>
                            import(
                                "./views/app/pages/hrm/attendance.vue"
                                )
                    },

                      // holidays
                      {
                        name: "holidays",
                        path: "holidays",
                        component: () =>
                            import(
                                "./views/app/pages/hrm/holidays.vue"
                                )
                    },


                    {
                        path: "leaves",
                        redirect: "/app/hrm/leaves/list",
                        children: [
                            {
                                name: "leave_list",
                                path: "list",
                                component: LeaveList,
                            },
                            {
                                name: "leave_type",
                                path: "type",
                                component: LeaveType,
                            },
                           
                        ]
                    },

                    
                ]
            },

            // People
            {
                path: "/app/People",
                redirect: "/app/People/Customers",
                children: [
                    // Customers
                    {
                        name: "Customers",
                        path: "Customers",
                        component: () =>
                            import(
                                 "./views/app/pages/people/customers.vue"
                            )
                    },

                    // Suppliers
                    {
                        name: "Suppliers",
                        path: "Suppliers",
                        component: () =>
                            import(
                                 "./views/app/pages/people/providers.vue"
                            )
                    },

                    // Users
                    {
                        name: "user",
                        path: "Users",
                        component: () =>
                            import(
                                 "./views/app/pages/people/users.vue"
                            )
                    }
                ]
            },

            // Settings
            {
                path: "/app/settings",
                redirect: "/app/settings/System_settings",
                children: [
                    // Permissions
                    {
                        path: "permissions",
                      
                        redirect: "/app/settings/permissions/list",
                        children: [
                            {
                                name: "groupPermission",
                                path: "list",
                                component: () =>
                                    import(
                                        "./views/app/pages/settings/permissions/Permissions.vue"
                                    )
                            },
                            {
                                name: "store_permission",
                                path: "store",
                                component: () =>
                                    import(
                                        "./views/app/pages/settings/permissions/Create_permission.vue"
                                    )
                            },
                            {
                                name: "edit_permission",
                                path: "edit/:id",
                                component: () =>
                                    import(
                                        "./views/app/pages/settings/permissions/Edit_permission.vue"
                                    )
                            }
                        ]
                    },

                     // sms_settings
                     {
                        name: "sms_settings",
                        path: "sms_settings",
                        component: () =>
                            import(
                                 "./views/app/pages/settings/sms_settings.vue"
                            )
                    },

                    // pos_settings
                    {
                    name: "pos_settings",
                    path: "pos_settings",
                    component: () =>
                        import(
                            "./views/app/pages/settings/pos_settings.vue"
                        )
                    },

                     // payment_gateway
                     {
                        name: "payment_gateway",
                        path: "payment_gateway",
                        component: () =>
                            import(
                             "./views/app/pages/settings/payment_gateway.vue"
                            )
                        },

                        // mail_settings
                     {
                        name: "mail_settings",
                        path: "mail_settings",
                        component: () =>
                            import(
                                 "./views/app/pages/settings/mail_settings.vue"
                            )
                        },

                         // update_settings
                     {
                        name: "update_settings",
                        path: "update_settings",
                        component: () =>
                            import(
                                 "./views/app/pages/settings/update_settings.vue"
                            )
                        },

                    // currencies
                    {
                        name: "currencies",
                        path: "Currencies",
                        component: () =>
                            import(
                                 "./views/app/pages/settings/currencies.vue"
                            )
                    },

                    // Backup
                    {
                        name: "Backup",
                        path: "Backup",
                        component: Backup,
                    },

                    // Warehouses
                    {
                        name: "Warehouses",
                        path: "Warehouses",
                        component: () =>
                            import(
                             "./views/app/pages/settings/warehouses.vue"
                            )
                    },

                    // System Settings
                    {
                        name: "system_settings",
                        path: "System_settings",
                        component: SystemSettings,
                    }
                  
                ]
            },

            // Reports
            {
                path: "/app/reports",
                redirect: "/app/reports/profit_and_loss",
                children: [
                    {
                        name: "payments_purchases",
                        path: "payments_purchase",
                        component: () =>
                            import(
                                "./views/app/pages/reports/payments/payments_purchases.vue"
                            )
                    },
                    {
                        name: "payments_sales",
                        path: "payments_sale",
                        component: () =>
                            import(
                                "./views/app/pages/reports/payments/payments_sales.vue"
                            )
                    },
                    {
                        name: "payments_purchases_returns",
                        path: "payments_purchases_returns",
                        component: () =>
                            import(
                                "./views/app/pages/reports/payments/payments_purchases_returns.vue"
                            )
                    },
                    {
                        name: "payments_sales_returns",
                        path: "payments_sales_returns",
                        component: () =>
                            import(
                                "./views/app/pages/reports/payments/payments_sales_returns.vue"
                            )
                    },

                    {
                        name: "profit_and_loss",
                        path: "profit_and_loss",
                        component: () =>
                            import(
                                "./views/app/pages/reports/profit_and_loss.vue"
                            )
                    },

                    {
                        name: "quantity_alerts",
                        path: "quantity_alerts",
                        component: () =>
                            import(
                                "./views/app/pages/reports/quantity_alerts.vue"
                            )
                    },
                    {
                        name: "warehouse_report",
                        path: "warehouse_report",
                        component: () =>
                            import(
                                "./views/app/pages/reports/warehouse_report.vue"
                            )
                    },

                    {
                        name: "sales_report",
                        path: "sales_report",
                        component: () =>
                            import(
                                "./views/app/pages/reports/sales_report.vue"
                            )
                    },
                    {
                        name: "purchase_report",
                        path: "purchase_report",
                        component: () =>
                            import(
                                "./views/app/pages/reports/purchase_report.vue"
                            )
                    },

                    {
                        name: "customers_report",
                        path: "customers_report",
                        component: () =>
                            import(
                                "./views/app/pages/reports/customers_report.vue"
                            )
                    },
                    {
                        name: "detail_customer_report",
                        path: "detail_customer/:id",
                        component: () =>
                            import(
                                "./views/app/pages/reports/detail_Customer_Report.vue"
                            )
                    },

                    {
                        name: "providers_report",
                        path: "providers_report",
                        component: () =>
                            import(
                                "./views/app/pages/reports/providers_report.vue"
                            )
                    },
                    {
                        name: "detail_supplier_report",
                        path: "detail_supplier/:id",
                        component: () =>
                            import(
                                "./views/app/pages/reports/detail_Supplier_Report.vue"
                            )
                    },

                    {
                        name: "top_selling_products",
                        path: "top_selling_products",
                        component: () =>
                            import(
                                "./views/app/pages/reports/top_selling_products.vue"
                            )
                    },

                    {
                        name: "top_customers",
                        path: "top_customers",
                        component: () =>
                            import(
                                "./views/app/pages/reports/top_customers.vue"
                            )
                    },

                    {
                        name: "stock_report",
                        path: "stock_report",
                        component: () =>
                            import(
                                "./views/app/pages/reports/stock_report.vue"
                            )
                    },
                    {
                        name: "detail_stock_report",
                        path: "detail_stock/:id",
                        component: () =>
                            import(
                                "./views/app/pages/reports/detail_stock_report.vue"
                            )
                    },

                    {
                        name: "users_report",
                        path: "users_report",
                        component: () =>
                            import(
                                "./views/app/pages/reports/users_report.vue"
                            )
                    },
                    {
                        name: "detail_user_report",
                        path: "detail_user/:id",
                        component: () =>
                            import(
                                "./views/app/pages/reports/detail_user_report.vue"
                            )
                    },
                ]
            },

            {
                name: "profile",
                path: "/app/profile",
                component: () =>
                    import(
                        "./views/app/pages/profile.vue"
                    )
            }
        ]
    },

    {
        name: "pos",
        path: "/app/pos",
        // beforeEnter: authenticate,
        component: () =>
            import(
             "./views/app/pages/pos.vue"
             )
    },

    {
        path: "*",
        name: "NotFound",
        component: () =>
            import(
                "./views/app/pages/notFound.vue"
            )
    },

    {
        path: "not_authorize",
        name: "not_authorize",
        component: NotAuthorize, 
            
    }
];

const router = new Router({
    mode: "history",
    linkActiveClass: "open",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err);
};

router.beforeEach((to, from, next) => {
    // If this isn't an initial page load.
    if (to.path) {
        // Start the route progress bar.
        NProgress.start();
        NProgress.set(0.1);
    }
    next();

    if (
        store.state.language.language &&
        store.state.language.language !== i18n.locale
    ) {
        i18n.locale = store.state.language.language;
        next();
    } else if (!store.state.language.language) {
        store.dispatch("language/setLanguage", navigator.languages).then(() => {
            i18n.locale = store.state.language.language;
            next();
        });
    } else {
        next();
    }
});

router.afterEach(() => {
    // Remove initial loading
    const gullPreLoading = document.getElementById("loading_wrap");
    if (gullPreLoading) {
        gullPreLoading.style.display = "none";
    }
    // Complete the animation of the route progress bar.
    setTimeout(() => NProgress.done(), 500);
    // NProgress.done();

    if (window.innerWidth <= 1200) {
        store.dispatch("changeSidebarProperties");
        if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
            store.dispatch("changeSecondarySidebarProperties");
        }

        if (store.getters.getCompactSideBarToggleProperties.isSideNavOpen) {
            store.dispatch("changeCompactSidebarProperties");
        }
    } else {
        if (store.getters.getSideBarToggleProperties.isSecondarySideNavOpen) {
            store.dispatch("changeSecondarySidebarProperties");
        }
    }
});

async function Check_Token(to, from, next) {
    let token = to.params.token;
    const res = await axios
        .get("password/find/" + token)
        .then(response => response.data);

    if (!res.success) {
        next("/app/sessions/signIn");
    } else {
        return next();
    }
}

export default router;