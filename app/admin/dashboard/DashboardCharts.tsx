"use client";

type KPIData = {
  totalVehicles: number;
  availableVehicles: number;
  reservedVehicles: number;
  soldVehicles: number;
  totalUsers: number;
  newUsersThisMonth: number;
  reservationsLast30Days: number;
};

type MonthlyPoint = {
  month: string;
  count: number;
};

type DistributionPoint = {
  label: string;
  count: number;
};

type DashboardData = {
  kpis: KPIData;
  vehiclesPerMonth: MonthlyPoint[];
  reservationsPerMonth: MonthlyPoint[];
  availabilityDistribution: DistributionPoint[];
  roleDistribution: DistributionPoint[];
  latestReservations: {
    vehicleId: number;
    vehicleLabel: string;
    userLabel: string;
    reservedUntil: string | null;
    availability: string;
  }[];
  latestVehicles: {
    id: number;
    label: string;
    createdAt: string;
    availability: string;
  }[];
};

export default function DashboardCharts({ data }: { data: DashboardData }) {
  // For now, backend-first: just dump the structure so you can inspect it.
  // Later, we replace this with Recharts components and nice KPIs.
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-2">KPIs</h2>
        <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(data.kpis, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Vehicles per month</h2>
        <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(data.vehiclesPerMonth, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Reservations per month</h2>
        <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(data.reservationsPerMonth, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Availability distribution
        </h2>
        <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(data.availabilityDistribution, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Role distribution</h2>
        <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(data.roleDistribution, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Últimas reservas</h2>
        <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(data.latestReservations, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Últimos vehículos</h2>
        <pre className="bg-neutral-900 p-4 rounded text-xs overflow-x-auto">
          {JSON.stringify(data.latestVehicles, null, 2)}
        </pre>
      </section>
    </div>
  );
}
