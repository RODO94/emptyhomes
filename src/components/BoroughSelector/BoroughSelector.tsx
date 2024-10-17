import { Box, Chip, MenuItem, Select, Typography } from "@mui/material";
import { useBoroughStore } from "../../store";
import { emptyData } from "../../data/empties";
import { useFormik } from "formik";
import { useEffect } from "react";

export default function BoroughSelector() {
  const { borough, setBorough } = useBoroughStore();
  const formik = useFormik({
    initialValues: { borough },
    onSubmit: () => {},
  });

  useEffect(() => {
    setBorough(formik.values.borough);
  }, [formik.values.borough, setBorough]);

  return (
    <Box
      sx={{
        position: "sticky",
        top: "3rem",
        padding: "0 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        mt: "32rem",
        width: "100%",
      }}
    >
      <div>
        <Typography variant="body1">
          Select a borough to refine content on the page
        </Typography>
        <Select
          name="borough"
          id="borough"
          value={borough}
          onChange={(e) => {
            formik.handleChange(e);
          }}
          fullWidth
        >
          <MenuItem value={"all boroughs"}>All boroughs</MenuItem>
          {emptyData
            .filter((authority) => authority.region === "L")
            .map((borough) => (
              <MenuItem value={borough.localAuthority}>
                {borough.localAuthority}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div>
        {borough !== "all boroughs" && (
          <>
            <Typography>Current Selection</Typography>
            <Chip
              component={Typography}
              sx={{
                width: "100%",
                padding: "4px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                "& .MuiChip-label": {
                  typography: "button",
                },
                backgroundColor: "#E3BFDB",
                mt: "0.5rem",
              }}
              label={borough}
              onDelete={() => {
                formik.setFieldValue("borough", "all boroughs");
                setBorough("all boroughs");
              }}
            />
          </>
        )}
      </div>
    </Box>
  );
}
