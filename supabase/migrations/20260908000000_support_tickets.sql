-- Support Tickets table for AWP Learning Hub
create table if not exists support_tickets (
  id           uuid        primary key default gen_random_uuid(),
  created_at   timestamptz not null    default now(),
  submitted_by text        not null,
  department   text        not null,
  subject      text        not null,
  description  text        not null,
  status       text        not null    default 'open',
  admin_note   text,
  updated_at   timestamptz not null    default now()
);

-- Constrain status to allowed values
alter table support_tickets
  add constraint support_tickets_status_check
  check (status in ('open', 'in_progress', 'closed'));

-- Constrain department to known departments
alter table support_tickets
  add constraint support_tickets_department_check
  check (department in ('PP', 'QM', 'MM', 'MDG', 'Other'));

-- Enable Row Level Security
alter table support_tickets enable row level security;

-- Anyone (including anonymous) can submit a ticket
create policy "Anyone can submit a ticket"
  on support_tickets
  for insert
  with check (true);

-- Only authenticated admin users can read all tickets
create policy "Admin reads all tickets"
  on support_tickets
  for select
  using (auth.role() = 'authenticated');

-- Only authenticated admin users can update status / admin_note
create policy "Admin updates tickets"
  on support_tickets
  for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Automatically keep updated_at current on every update
create or replace function update_support_tickets_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger support_tickets_updated_at
  before update on support_tickets
  for each row
  execute procedure update_support_tickets_updated_at();
