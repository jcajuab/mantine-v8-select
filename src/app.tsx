import { Select } from "@mantine/core"
import { useState } from "react"

export function App() {
  const [value, setValue] = useState<string | null>(null)

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        maxWidth: "75ch",
        minHeight: "100vh",
      }}
    >
      <Select
        label="Select your favorite technology"
        data={[
          {
            group: "Frontend",
            items: [
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
            ],
          },
          {
            group: "Backend",
            items: [
              { value: "express", label: "Express" },
              { value: "hono", label: "Hono" },
            ],
          },
        ]}
        value={value}
        onChange={(_, option) => {
          setValue(option.value)
        }}
        // Even without this, it still does not work
        onClear={() => {
          setValue(null)
        }}
        clearable
      />
    </main>
  )
}
