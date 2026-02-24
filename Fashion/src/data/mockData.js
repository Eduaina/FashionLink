import WhiteShirt from "../assets/ordercardimages/white shirt.png";
import Fabric from "../assets/ordercardimages/fabric.png";
import Gown from "../assets/ordercardimages/gown.png";
import Green from "../assets/ordercardimages/green.png";
import Kente from "../assets/ordercardimages/kente.png";
import Suit from "../assets/ordercardimages/suit.png";
import WeddingGown from "../assets/ordercardimages/wedding gown.png";

export const currentUser = {
  id: "usr_001",
  name: "Promise",
  role: "Designer",
  avatar: null,
};

export const dashboardStats = [
  { id: "active_orders",  label: "Active Orders",    value: 6, icon: "orders", variant: "default" },
  { id: "due_this_week",  label: "Due This Week",    value: 3, icon: "clock",  variant: "warning" },
  { id: "completed",      label: "Completed",        value: 1, icon: "check",  variant: "success" },
  { id: "urgent_delayed", label: "Urgent / Delayed", value: 1, icon: "alert",  variant: "danger"  },
];

export const upcomingOrders = [
  { id: "ORD-003", client: "Fatima Audu",    description: "Elegant evening gown in emerald",      delivery: "Feb 20", deliveryDate: "2025-02-20", status: "Delayed"     },
  { id: "ORD-002", client: "David Mensah",   description: "Two-piece suit in navy blue",           delivery: "Feb 22", deliveryDate: "2025-02-22", status: "Assigned"    },
  { id: "ORD-001", client: "Amara Okonkwo",  description: "Custom Aso-Oke Agbada",                delivery: "Feb 25", deliveryDate: "2025-02-25", status: "In Progress" },
  { id: "ORD-006", client: "Amara Okonkwo",  description: "Casual linen shirt in off-white",       delivery: "Feb 28", deliveryDate: "2025-02-28", status: "Assigned"    },
  { id: "ORD-004", client: "Chioma Eze",     description: "Contemporary Ankara jumpsuit",          delivery: "Mar 1",  deliveryDate: "2025-03-01", status: "In Progress" },
];

export const aiAlerts = {
  deadlineRisk:    { summary: "You have 3 orders due this week. ORD-003 for Fatima Audu is currently delayed due to fabric availability. Consider prioritizing this order." },
  workloadSummary: { summary: "6 active orders across 6 clients. Your current workload is moderate." },
};

export const allOrders = [
  {
    id: "ORD-001",
    clientId: "cli_001",
    client: "Amara Okonkwo",
    description: "Custom Aso-Oke Agbada with intricate embroidery for a traditional wedding ceremony",
    notes: "Client prefers gold thread embroidery",
    delivery: "Feb 25, 2026",
    deliveryDate: "2026-02-25",
    placedDate: "2026-02-10",
    status: "In Progress",
    image: Fabric,
  },
  {
    id: "ORD-002",
    clientId: "cli_002",
    client: "David Mensah",
    description: "2 piece suit in navy blue Italian wool",
    notes: "Slim fit preferred, peak lapel",
    delivery: "Feb 22, 2026",
    deliveryDate: "2026-02-22",
    placedDate: "2026-02-05",
    status: "Assigned",
    image: Suit,  
  },
  {
    id: "ORD-003",
    clientId: "cli_003",
    client: "Fatimah Audu",
    description: "Elegant evening gown with Emerald silk",
    notes: "Halter neck, no sleeves, floor length",
    delivery: "Feb 20, 2026",
    deliveryDate: "2026-02-20",
    placedDate: "2026-02-01",
    status: "Delayed",
    image: Green,
  },
  {
    id: "ORD-004",
    clientId: "cli_004",
    client: "Chioma Eze",
    description: "Contemporary Ankara jumpsuit with cape details",
    notes: "Bold print, wide leg, cape attached at shoulders",
    delivery: "Mar 1, 2026",
    deliveryDate: "2026-03-01",
    placedDate: "2026-02-08",
    status: "In Progress",
    image: Gown,
  },
  {
    id: "ORD-005",
    clientId: "cli_005",
    client: "Kwame Asante",
    description: "Traditional Kente cloth with modern fit",
    notes: "Kente strip pattern, fitted through chest",
    delivery: "Feb 18, 2026",
    deliveryDate: "2026-02-18",
    placedDate: "2026-01-28",
    status: "Completed",
    image: Kente,
  },
  {
    id: "ORD-006",
    clientId: "cli_001",
    client: "Amara Okonkwo",
    description: "Casual linen shirt in off-white with mandarin collar",
    notes: "Breathable fabric, relaxed fit",
    delivery: "Feb 28, 2026",
    deliveryDate: "2026-02-28",
    placedDate: "2026-02-10",
    status: "Assigned",
    image: WhiteShirt,
  },
  {
    id: "ORD-007",
    clientId: "cli_006",
    client: "Ngozi Adichie",
    description: "Bridal train dress in ivory satin with lace overlay",
    notes: "Cathedral train, lace bodice, A-line skirt",
    delivery: "Mar 8, 2026",
    deliveryDate: "2026-03-08",
    placedDate: "2026-02-12",
    status: "In Progress",
    image: WeddingGown,
  },
];

export const navLinks = [
  { id: "dashboard",     label: "Dashboard",     icon: "dashboard" },
  { id: "orders",        label: "Orders",        icon: "orders"    },
  { id: "clients",       label: "Clients",       icon: "clients"   },
  { id: "notifications", label: "Notifications", icon: "bell"      },
  { id: "settings",      label: "Settings",      icon: "settings"  },
];

export const clients = [
  { id: "cli_001", name: "Amara Okonkwo",  measurements: { chest: 36, waist: 28, hip: 38, shoulder: 15, sleeve: 24, length: 42 } },
  { id: "cli_002", name: "David Mensah",   measurements: { chest: 40, waist: 34, hip: 40, shoulder: 17, sleeve: 26, length: 44 } },
  { id: "cli_003", name: "Fatimah Audu",   measurements: { chest: 34, waist: 26, hip: 36, shoulder: 14, sleeve: 22, length: 40 } },
  { id: "cli_004", name: "Chioma Eze",     measurements: { chest: 35, waist: 27, hip: 37, shoulder: 14, sleeve: 23, length: 41 } },
  { id: "cli_005", name: "Kwame Asante",   measurements: { chest: 42, waist: 36, hip: 42, shoulder: 18, sleeve: 27, length: 46 } },
  { id: "cli_006", name: "Ngozi Adichie",  measurements: { chest: 33, waist: 25, hip: 35, shoulder: 13, sleeve: 22, length: 39 } },
];
