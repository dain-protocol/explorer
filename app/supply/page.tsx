import SupplyPageClient from './page-client';

export const metadata = {
    description: `Overview of the native token supply on DAIN`,
    title: `Supply Overview | DAIN`,
};

export default function SupplyPage() {
    return <SupplyPageClient />;
}
