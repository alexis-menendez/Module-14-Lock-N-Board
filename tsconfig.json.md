This is what the tsconfig used to look like before I followed ChatGPT's advice, I am saving it here in case I need to revert back to it.

{

  "compilerOptions": {
    /* Language and Environment */
    "target": "ES2020",

    /* Modules */
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "skipLibCheck": true,

    /* JavaScript Support */
    "allowJs": true,
    "checkJs": true,

    /* Interop Constraints */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "useUnknownInCatchVariables": true
  }
}