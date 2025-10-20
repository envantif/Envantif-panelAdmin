import React, { useEffect } from "react";
import { useAdminStore } from "../../store/useAdminStore";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Loader, Bell, ShoppingCart, Users, DollarSign } from "lucide-react";

export const currency = "$";

export default function Dashboard() {
  const { users, orders, fetchAll, loading } = useAdminStore();

  useEffect(() => {
    fetchAll();
  }, []);

  const totalUsers = users.length;
  const totalOrders = orders.length;
  const revenue = orders.reduce((s, o) => s + (o.total_amount || 0), 0);
  const totalNotifications = 12; // Exemple statique — à relier à ton store plus tard

  const data = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 200 },
    { month: "May", sales: 278 },
    { month: "Jun", sales: 189 },
  ];

  return (
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Tableau de bord
      </h2>

      {loading && (
        <div className="flex items-center gap-2 text-slate-700">
          <Loader
            color="var(--color-accent)"
            size={18}
            className="animate-spin"
          />
          <span>Chargement...</span>
        </div>
      )}

      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <motion.div
          whileHover={{ y: -10, x : -5 }}
          className="p-4 bg-white rounded-xl shadow text-center sm:text-left"
        >
          <div className="text-sm text-slate-900">Utilisateurs</div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Users size={18} color="#FEB21A" />
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {totalUsers}
            </span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -10, x : -5 }}
          className="p-4 bg-white rounded-xl shadow text-center sm:text-left"
        >
          <div className="text-sm text-slate-900"> Commandes</div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <ShoppingCart size={18} color="#FEB21A" />
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {totalOrders}
            </span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -10, x : -5 }}
          className="p-4 bg-white rounded-xl shadow text-center sm:text-left"
        >
          <div className="text-sm text-slate-900">Notifications</div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Bell size={18} color="#FEB21A" />
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {totalNotifications}
            </span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -10, x : -5 }}
          className="p-4 bg-white rounded-xl shadow text-center sm:text-left"
        >
          <div className="text-sm text-slate-900">Chiffre d'affaires</div>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <DollarSign size={18} color="#FEB21A" />
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            {revenue.toFixed(2)}
          </span>
          </div>
        </motion.div>
      </div>

      {/* Graphique */}
      <div className="p-4 bg-white rounded-xl shadow">
        <h3
          className="font-semibold mb-2"
          style={{ color: "var(--color-primary)" }}
        >
          Ventes par mois
        </h3>
        <div className="w-full h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#FEB21A" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
