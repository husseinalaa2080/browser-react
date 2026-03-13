import { StatePanel } from '@/components/ui/StatePanel';

type EmptyViewProps = {
  title: string;
};

export const EmptyView = ({ title }: EmptyViewProps) => (
  <StatePanel copy="No Pokemon were returned for this view." title={title} />
);
