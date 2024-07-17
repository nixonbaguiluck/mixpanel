/* eslint-disable @next/next/no-img-element */
"use client";

import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { QueryBuilderMaterial } from "@react-querybuilder/material";
import { useState } from "react";
import type { RuleGroupType } from "react-querybuilder";
import { formatQuery, QueryBuilder } from "react-querybuilder";

import { useUsers } from "@/api/user";

import { fields } from "./fields";

const initialQuery: RuleGroupType = { combinator: "and", rules: [] };

export default function HomePage() {
  const [query, setQuery] = useState(initialQuery);
  const [formattedQuery, setFormattedQuery] = useState("");

  const { data: users, isLoading, isFetching } = useUsers(formattedQuery);

  function handleApply() {
    const formatted = formatQuery(query, "mongodb");
    setFormattedQuery(formatted);
  }

  function handleClear() {
    setQuery(initialQuery);
    setFormattedQuery("");
  }

  const columns: GridColDef[] = [
    {
      field: "firstName",
      flex: 0.5,
      headerName: "Name",
      renderCell: (params) => (
        <Box className="flex items-center gap-4">
          <img
            src={`https://randomuser.me/api/portraits/${params?.row.gender == "male" ? "men" : "women"}/${params?.row.id}.jpg`}
            className="w-10 h-10 rounded-full"
            alt="Avatar"
          />
          <Typography variant="body2">
            {params?.row.firstName} {params?.row.lastName}
          </Typography>
        </Box>
      ),
    },
    {
      field: "email",
      flex: 0.7,
      headerName: "Email",
      renderCell: (params) => (
        <Typography variant="body2">{params?.row.email}</Typography>
      ),
    },
    {
      field: "phone",
      flex: 0.5,
      headerName: "Phone",
      renderCell: (params) => (
        <Typography variant="body2">{params?.row.phone}</Typography>
      ),
    },
    {
      field: "birthDate",
      flex: 0.4,
      headerName: "BirthDate",
      renderCell: (params) => (
        <Typography variant="body2">{params?.row.birthDate}</Typography>
      ),
    },
    {
      field: "age",
      flex: 0.2,
      headerName: "Age",
      renderCell: (params) => (
        <Typography variant="body2">{params?.row.age}</Typography>
      ),
    },
    {
      field: "city",
      flex: 0.3,
      headerName: "City",
      renderCell: (params) => (
        <Typography variant="body2">{params?.row.address.city}</Typography>
      ),
    },
    {
      field: "country",
      flex: 0.4,
      headerName: "Country",
      renderCell: (params) => (
        <Typography variant="body2">{params?.row.address.country}</Typography>
      ),
    },
  ];

  return (
    <Box className="w-full px-24 py-10">
      <Typography variant="h5" className="font-bold">
        Users
      </Typography>

      <Typography variant="body2" className="text-slate-600 py-4">
        {users?.length || 0} Users with profiles
      </Typography>

      <Box className="p-4 border border-slate-200 rounded-xl shadow-sm">
        <Box className="flex gap-2 items-center cursor-pointer text-slate-600">
          <DragIndicatorIcon className="text-sm" />
          <Typography variant="body2" className="font-semibold">
            All users
          </Typography>
        </Box>

        <QueryBuilderMaterial>
          <QueryBuilder
            fields={fields}
            query={query}
            onQueryChange={setQuery}
            showCombinatorsBetweenRules
          />
        </QueryBuilderMaterial>
      </Box>

      <Box className="w-full flex justify-end mt-4 gap-4">
        <Button onClick={() => handleClear()}>Clear Filter</Button>
        <Button
          onClick={() => handleApply()}
          className="bg-blue-600 text-white"
        >
          Apply Fiter
        </Button>
      </Box>

      <Card className="border border-secondary rounded-2xl mt-4 flex flex-col bg-lightgrey">
        <DataGrid
          rows={users || []}
          columns={columns}
          sx={{
            border: "none",
            minHeight: 200,
            ".MuiDataGrid-virtualScroller": {
              overflow: "hidden !important",
              minHeight: 100,
            },
            ".MuiDataGrid-cell": {
              display: "flex",
              alignItems: "center",
            },
            ".MuiDataGrid-row": {
              paddingX: "10px",
            },
            ".MuiDataGrid-columnHeaders": {
              background: "#E9E9E9 !important",
              paddingX: "10px",
              color: "#626266",
            },
            ".MuiDataGrid-columnHeader": {
              background: "#E9E9E9 !important",
            },
          }}
          disableRowSelectionOnClick
          hideFooter={true}
          rowHeight={61}
          loading={isLoading || isFetching}
          disableColumnFilter
          disableColumnMenu
          disableColumnSorting
          disableColumnResize
        />
      </Card>
    </Box>
  );
}
