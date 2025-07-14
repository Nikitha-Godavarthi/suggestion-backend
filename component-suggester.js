const VISA_COMPONENTS = {
    Button: {
      name: "Button",
      category: "Form",
      description: "Primary button with variant, size, and loading support",
      props: ["variant", "size", "disabled", "loading", "onClick"],
      code: `import { Button } from '@visa/nova-react';\n\nexport const DefaultButton = () => {\n  return <Button>Primary action</Button>;\n};`
    },
    Input: {
      name: "Input",
      category: "Form",
      description: "Text field with accessibility and state control",
      props: ["type", "placeholder", "value", "onChange", "disabled"],
      code: `import { Input, InputContainer, Label, Utility } from '@visa/nova-react';\n\nconst id = 'input-default';\n\nexport const DefaultInput = () => {\n  return (\n    <Utility vFlex vFlexCol vGap={4}>\n      <Label htmlFor={id}>Label (required)</Label>\n      <InputContainer>\n        <Input aria-required="true" id={id} type="text" />\n      </InputContainer>\n    </Utility>\n  );\n};`
    },
    InputContainer: {
      name: "InputContainer",
      category: "Form",
      description: "Wrapper for input to provide consistent spacing and style",
      props: ["children"],
      code: `import { InputContainer } from '@visa/nova-react';\n\n<InputContainer>\n  <Input aria-required="true" id={id} type="text" />\n</InputContainer>`
    },
    Label: {
      name: "Label",
      category: "Form",
      description: "Accessible label for form fields",
      props: ["htmlFor", "children"],
      code: `<Label htmlFor=\"email\">Email Address</Label>`
    },
    Checkbox: {
      name: "Checkbox",
      category: "Form",
      description: "Boolean input with label and accessible states",
      props: ["checked", "onChange", "label"],
      code: `import { Checkbox, Label, Utility } from '@visa/nova-react';\n\nconst id = 'checkbox-default';\n\nexport const DefaultCheckbox = () => {\n  return (\n    <Utility vAlignItems=\"center\" vFlex vGap={2}>\n      <Checkbox id={id} />\n      <Label htmlFor={id}>Label</Label>\n    </Utility>\n  );\n};`
    },
    Card: {
      name: "Card",
      category: "Layout",
      description: "Flexible surface container for sections",
      props: ["children"],
      code: `<Card><p>Card content goes here</p></Card>`
    },
    Modal: {
      name: "Modal",
      category: "Feedback",
      description: "Dialog window for user interaction",
      props: ["open", "onClose", "title", "size", "children"],
      code: `<Modal open={true} onClose={() => {}} title=\"Example Modal\">Modal Content</Modal>`
    },
    Table: {
      name: "Table",
      category: "Data Display",
      description: "Table component for displaying structured data",
      props: ["data", "columns"],
      code: `import { ScreenReader, Table, Tbody, Td, Th, Thead, Tr } from '@visa/nova-react';\nimport { CSSProperties } from 'react';\n\nexport const LargePaddingBandedTable = () => {\n  return (\n    <Table alternate style={{\n      '--v-table-data-padding-block-default': 'var(--v-table-data-padding-block-large)',\n      '--v-table-data-block-default': 'var(--v-table-data-block-large)',\n    } as CSSProperties}>\n      <ScreenReader tag=\"caption\">Table with large padding and banded rows.</ScreenReader>\n      <Thead>\n        <Tr>\n          <Th scope=\"col\">Column A</Th>\n          <Th scope=\"col\">Column B</Th>\n          <Th scope=\"col\">Column C</Th>\n          <Th scope=\"col\">Column D</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        <Tr><Td>A1</Td><Td>B1</Td><Td>C1</Td><Td>D1</Td></Tr>\n        <Tr><Td>A2</Td><Td>B2</Td><Td>C2</Td><Td>D2</Td></Tr>\n        <Tr><Td>A3</Td><Td>B3</Td><Td>C3</Td><Td>D3</Td></Tr>\n      </Tbody>\n    </Table>\n  );\n};`
    },
    Avatar: {
      name: "Avatar",
      category: "Data Display",
      description: "User profile image with fallback",
      props: ["src", "alt"],
      code: `import { Avatar } from '@visa/nova-react';\n\nconst BASE_URL = import.meta.env.BASE_URL;\nconst user = 'Alex Miller';\n\nexport const SmallImageAvatar = () => {\n  return <Avatar alt={user} small tag=\"img\" src={BASE_URL + '/alex-miller-stock.png'} />;\n};`
    },
    Toast: {
      name: "Toast",
      category: "Feedback",
      description: "Notification component",
      props: ["variant", "title", "message"],
      code: `<Toast variant=\"success\" title=\"Success\" message=\"Action completed\" />`
    },
    Pagination: {
      name: "Pagination",
      category: "Navigation",
      description: "Pagination control for navigating pages",
      props: ["children"],
      code: `import { VisaChevronLeftTiny, VisaChevronRightTiny, VisaOptionHorizontalTiny } from '@visa/nova-icons-react';\nimport { Button, Pagination, PaginationOverflow } from '@visa/nova-react';\n\n<Pagination>\n  <li><Button iconButton><VisaChevronLeftTiny /></Button></li>\n  <li><Button>1</Button></li>\n  <li><Button>2</Button></li>\n  <PaginationOverflow><VisaOptionHorizontalTiny /></PaginationOverflow>\n  <li><Button iconButton><VisaChevronRightTiny /></Button></li>\n</Pagination>`
    },
    PaginationOverflow: {
      name: "PaginationOverflow",
      category: "Navigation",
      description: "Indicates hidden pagination pages",
      props: ["children"],
      code: `<PaginationOverflow>...</PaginationOverflow>`
    },
  };

// --- Code Generation Logic ---
function generateCode(query) {
    if (query.includes("login") || query.includes("sign in")) {
        return `
  import { Button, Input, InputContainer, Label, Checkbox, Card, Utility } from '@visa/nova-react';
  import { useState } from 'react';
  
  export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
  
    return (
      <Card>
        <Utility vFlex vFlexCol vGap={6}>
          <Label htmlFor="email">Email</Label>
          <InputContainer>
            <Input id="email" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputContainer>
  
          <Label htmlFor="password">Password</Label>
          <InputContainer>
            <Input id="password" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputContainer>
  
          <Checkbox label="Remember Me" checked={remember} onChange={() => setRemember(!remember)} />
  
          <Button type="submit" variant="primary">Sign In</Button>
        </Utility>
      </Card>
    );
  }`;
      }
  
      if (query.includes("profile card") || query.includes("avatar card") || query.includes("user details")) {
        return `
      import { Avatar, Card, Typography, Utility } from '@visa/nova-react';
      
      export function UserProfileCard() {
        return (
          <Card>
            <Utility vFlex vFlexCol vAlignItems="center" vGap={4}>
              <Avatar src="/avatar.png" alt="Jane Doe" tag="img" />
              <Typography variant="headline-4">Jane Doe</Typography>
              <Typography variant="body-medium">Frontend Developer at Visa</Typography>
            </Utility>
          </Card>
        );
      }`;
      }
      
      if (query.includes("contact") || query.includes("support form") || query.includes("help form")) {
        return `
      import { Button, Input, InputContainer, Label, Card, Utility } from '@visa/nova-react';
      import { useState } from 'react';
      
      export function ContactForm() {
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
      
        return (
          <Card>
            <Utility vFlex vFlexCol vGap={6}>
              <Label htmlFor="email">Email</Label>
              <InputContainer>
                <Input id="email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </InputContainer>
      
              <Label htmlFor="message">Message</Label>
              <InputContainer>
                <Input id="message" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </InputContainer>
      
              <Button variant="primary">Send</Button>
            </Utility>
          </Card>
        );
      }`;
      }
      
      if (query.includes("credit card") || query.includes("payment")) {
        return `
  import { Input, InputContainer, Label, Card, Utility, Button } from '@visa/nova-react';
  
  export function PaymentCard() {
    return (
      <Card>
        <Utility vFlex vFlexCol vGap={6}>
          <Label htmlFor="amount">Amount</Label>
          <InputContainer>
            <Input id="amount" placeholder="$100.00" />
          </InputContainer>
  
          <Label htmlFor="status">Status</Label>
          <InputContainer>
            <Input id="status" placeholder="Paid / Pending" />
          </InputContainer>
  
          <Button variant="primary">Process</Button>
        </Utility>
      </Card>
    );
  }`;
      }
  
      if (query.includes("navigation") || query.includes("header") || query.includes("user menu")) {
        return `
  import { Avatar, Utility, Typography, Button } from '@visa/nova-react';
  import { VisaChevronDownTiny } from '@visa/nova-icons-react';
  
  export function NavigationHeader() {
    return (
      <Utility vFlexRow vJustifyContent="between" vAlignItems="center" style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Typography variant="headline-3">My App</Typography>
        <Utility vFlexRow vAlignItems="center" vGap={8}>
          <Avatar src="/profile.png" alt="User" small tag="img" />
          <Button variant="subtle" iconRight={<VisaChevronDownTiny />}>Menu</Button>
        </Utility>
      </Utility>
    );
  }`;
      }
  
      if (query.includes("pagination") || query.includes("table") || query.includes("sort")) {
        return `
  import { Table, Card, Pagination, PaginationOverflow, Button } from '@visa/nova-react';
  import { VisaChevronLeftTiny, VisaChevronRightTiny, VisaOptionHorizontalTiny } from '@visa/nova-icons-react';
  
  export function DataTableWithPagination() {
    const data = [
      { name: 'Alice', email: 'alice@visa.com', status: 'Active' },
      { name: 'Bob', email: 'bob@visa.com', status: 'Inactive' },
    ];
    const columns = [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'status', label: 'Status' },
    ];
  
    return (
      <Card>
        <Table data={data} columns={columns} />
        <Pagination>
          <li><Button iconButton><VisaChevronLeftTiny /></Button></li>
          <li><Button>1</Button></li>
          <li><Button>2</Button></li>
          <PaginationOverflow><VisaOptionHorizontalTiny /></PaginationOverflow>
          <li><Button iconButton><VisaChevronRightTiny /></Button></li>
        </Pagination>
      </Card>
    );
  }`;
      }
  
      return `
  import { Button } from '@visa/nova-react';
  
  export const DefaultButton = () => {
    return <Button>Primary action</Button>;
  };`;
}

// --- Suggestion Logic ---
function suggest(query) {
    const normalizedQuery = query.toLowerCase();
    const components = [];

    const match = (keywords) => keywords.some((k) => normalizedQuery.includes(k));

    // Prioritize exact component name matches
    const directMatches = Object.values(VISA_COMPONENTS).filter((component) =>
      normalizedQuery.includes(component.name.toLowerCase())
    );

    if (directMatches.length > 0) {
      components.push(...directMatches);
    } else if (match(["login", "sign in", "form"])) {
      components.push(
        VISA_COMPONENTS.Card,
        VISA_COMPONENTS.Label,
        VISA_COMPONENTS.Input,
        VISA_COMPONENTS.InputContainer,
        VISA_COMPONENTS.Checkbox,
        VISA_COMPONENTS.Button
      );
    } else if (match(["credit card", "payment", "card input"])) {
      components.push(
        VISA_COMPONENTS.Label,
        VISA_COMPONENTS.Input,
        VISA_COMPONENTS.InputContainer,
        VISA_COMPONENTS.Card,
        VISA_COMPONENTS.Button
      );
    } else if (match(["pagination", "data table", "sort", "page"])) {
      components.push(
        VISA_COMPONENTS.Card,
        VISA_COMPONENTS.Table,
        VISA_COMPONENTS.Pagination,
        VISA_COMPONENTS.PaginationOverflow
      );
    } else if (match(["profile", "avatar", "user icon"])) {
      components.push(VISA_COMPONENTS.Avatar);
    } else if (match(["toast", "notification"])) {
      components.push(VISA_COMPONENTS.Toast);
    } else if (match(["modal", "dialog"])) {
      components.push(VISA_COMPONENTS.Modal, VISA_COMPONENTS.Button);
    }

    // If still empty, show fallback
    if (components.length === 0) {
      components.push(VISA_COMPONENTS.Button);
    }

    const code = generateCode(normalizedQuery);

    return {
      components,
      code,
    };
}

// Export the main function to be used by other files
module.exports = {
    suggest
};
