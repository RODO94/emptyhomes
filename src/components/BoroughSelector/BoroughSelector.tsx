import { MenuItem, Select } from "@mui/material";
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
    <Select
      label="Boroughs"
      name="borough"
      id="borough"
      value={formik.values.borough}
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
  );
}
