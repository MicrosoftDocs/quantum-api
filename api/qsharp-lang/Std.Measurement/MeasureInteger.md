---
uid: Qdk.Std.Measurement.MeasureInteger
title: MeasureInteger operation
description: "Q# MeasureInteger operation: Measures the content of a quantum register and converts it to an integer. The measurement is performed with respect to the standard computational basis, i.e., the eigenbasis of `PauliZ`. Input register is reset to the |00...0⟩ state, which is suitable for releasing the register back to a target machine."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Measurement
qsharp.name: MeasureInteger
qsharp.summary: "Measures the content of a quantum register and converts it to an integer. The measurement is performed with respect to the standard computational basis, i.e., the eigenbasis of `PauliZ`. Input register is reset to the |00...0⟩ state, which is suitable for releasing the register back to a target machine."
---

# MeasureInteger operation

Fully qualified name: Std.Measurement.MeasureInteger

```qsharp
operation MeasureInteger(target : Qubit[]) : Int
```

## Summary
Measures the content of a quantum register and converts it to an integer.
The measurement is performed with respect to the standard computational basis,
i.e., the eigenbasis of `PauliZ`. Input register is reset to the |00...0⟩ state,
which is suitable for releasing the register back to a target machine.

## Input
### target
A quantum register in the little-endian encoding.

## Output
An unsigned integer that contains the measured value of `target`.
