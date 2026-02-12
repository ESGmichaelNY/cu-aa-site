import { redirect } from 'next/navigation';

export const metadata = {
    title: "Streams | CU-AA",
    description: "Discussion streams have moved to Forums.",
};

export default function StreamsPage() {
    redirect('/forums');
}
