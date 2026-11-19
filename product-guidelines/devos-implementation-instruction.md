# Product Implementation Instruction: DevOS Platform
## AI Gateway Provider Independence, Stability Lockdown, and Qwen Integration

> **Originating Authority**: Kontyra Engineering Governance Board  
> **Target Product**: **DevOS Platform** (`c:\Users\DELL\Documents\GitHub\DevOS-Code-Execution-Platform`)  
> **Target Priority**: **P2 (Operational Stability & Controlled Enhancement)**  
> **Instruction Status**: `Approved for Execution by DevOS Product Team`

---

## 1. Executive Summary & Required State

DevOS is Kontyra's browser-based cloud IDE, code execution engine, and portfolio publishing system. It has reached substantial operational maturity with functioning subdomains (`username.devos.kontyra.name.ng`), WebContainer/in-browser runtime integration, drag-and-drop zip extraction, and Git synchronization.

**Governing Law for DevOS**: **Do not rewrite functioning code.** Prioritize stability, zero regressions, and controlled integration of the new AI Assistant Gateway.

---

## 2. Mandatory Remediation Checklist for Product Team

### Phase 1: Operational Stability & Lockdown
- [ ] **Preserve Working IDE Workflows**: The drag-and-drop file upload, zip extraction, Monaco editor configuration, and terminal execution are certified stable. No refactoring of core editor state is permitted without explicit Architecture Board sign-off.
- [ ] **Mobile Navbar Conformance**: Maintain the existing clean desktop and mobile top bar. Do not introduce unbounded layout elements that interfere with the editor canvas or terminal drawers.

### Phase 2: Provider-Independent AI Gateway
- [ ] **Architecture Pattern**:
  ```
  DevOS Code Editor ──> DevOS AI Client ──> [ Provider-Independent Gateway ]
                                                      │
                       ┌──────────────────────────────┼──────────────────────────────┐
                       ▼                              ▼                              ▼
             [ Managed Qwen Endpoint ]      [ Developer BYOK Keys ]        [ Future: KORA Engine ]
              (Default Starter Model)     (OpenAI, Anthropic, Gemini)     (Proprietary Enterprise)
  ```
- [ ] **Bring-Your-Own-Key (BYOK)**: Allow developers to configure their own API keys (OpenAI, Anthropic, Gemini, DeepSeek) saved strictly in browser `localStorage` or encrypted user settings—NEVER sent to Kontyra telemetry or logs.
- [ ] **Default Model**: Connect the default managed assistant to **Qwen 2.5 Coder** (via HuggingFace Inference API or self-hosted gateway endpoint).
- [ ] **KORA Plug-in Hook**: Ensure the gateway interface exposes an abstract `AIProvider` interface (`generateCompletion`, `streamCompletion`) so that KORA AI can be plugged in seamlessly when certified for general internal use.

### Phase 3: Testing & Verification
- [ ] Run verification: `npm run build` and ensure clean bundle generation.
- [ ] Verify subdomain routing (*.devos.kontyra.name.ng) remains unaffected.
- [ ] Submit updated documentation to `Kontyra-brand/product-guidelines/devos.md`.
