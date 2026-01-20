-- Create Users Table
create table users (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  username text unique,
  avatar_url text,
  bio text,
  year_in_school text,
  post_grad_plans text,
  linkedin_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Projects Table
create table projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  category text,
  status text check (status in ('recruiting', 'ongoing', 'completed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Junction Table for User-Project relationships
create table project_members (
  project_id uuid references projects(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  role text, -- e.g. 'lead', 'researcher'
  primary key (project_id, user_id)
);