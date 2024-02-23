---
uid: Qdk.Microsoft.Quantum.Math.Complex
title: Complex user defined type
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: Complex
qsharp.summary: Represents a complex number by its real and imaginary components. The first element of the tuple is the real component, the second one - the imaginary component.
---

# Complex user defined type

Namespace: Microsoft.Quantum.Math

```qsharp
newtype Complex = (Real: Double, Imag: Double)
```

## Summary
Represents a complex number by its real and imaginary components.
The first element of the tuple is the real component,
the second one - the imaginary component.

## Example
The following snippet defines the imaginary unit 𝑖 = 0 + 1𝑖:
```qsharp
let imagUnit = Complex(0.0, 1.0);
```
