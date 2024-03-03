'use client';
import NavigationBar from '@/app/dashboard/navigation-bar';
import '@/lib/env';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
  { id: 4, col1: 'MUI', col2: 'is Amazing' },
  { id: 5, col1: 'MUI', col2: 'is Amazing' },
  { id: 6, col1: 'MUI', col2: 'is Amazing' },
  { id: 7, col1: 'MUI', col2: 'is Amazing' },
  { id: 8, col1: 'MUI', col2: 'is Amazing' },
  { id: 9, col1: 'MUI', col2: 'is Amazing' },
  { id: 10, col1: 'MUI', col2: 'is Amazing' },
  { id: 11, col1: 'MUI', col2: 'is Amazing' },
  { id: 12, col1: 'MUI', col2: 'is Amazing' },
  { id: 16, col1: 'MUI', col2: 'is Amazing' },
  { id: 14, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function Dashboard() {
  return (
    <main>
      <div className='flex items-center w-screen h-screen'>
        <NavigationBar />
        <div className='flex flex-col justify-between w-full h-full'>
          <div className='h-12 w-full border-b'></div>
          <DataGrid className='mx-5 my-5 p-5' rows={rows} columns={columns} />
          <div className='h-12 w-full border-t'></div>
        </div>
      </div>
    </main>
  );
}
