---
uid: Qdk.Std.Math.Complex
title: Complex user defined type
description: "Q# Complex user defined type: Represents a complex number by its real and imaginary components. The first element of the tuple is the real component, the second one - the imaginary component."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: udt
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: Complex
qsharp.summary: "Represents a complex number by its real and imaginary components. The first element of the tuple is the real component, the second one - the imaginary component."
---

# Complex user defined type

Fully qualified name: Std.Math.Complex

```qsharp
struct Complex { Real : Double, Imag : Double }
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
