import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

function FooterComponent() {
  return (
    <Footer style={{ textAlign: "center", padding: "20px 0" }}>
      <Text>
        Todos los derechos reservados Huellitas |{" "}
        <a
          href="https://wa.me/5218115197919?text=Hola,%20quiero%20más%20información!"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          VOLKALABS
        </a>
      </Text>
    </Footer>
  );
}

export default FooterComponent;
