---
uid: Microsoft.Quantum.Measurement
title: Microsoft.Quantum.Measurement namespace
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Measurement
qsharp.summary: >-
  This namespace contains operations for performing measurements beyond
  the basic measurement operations available in the
  [`Microsoft.Quantum.Intrinsic` namespace](xref:Microsoft.Quantum.Intrinsic).
---

# Microsoft.Quantum.Measurement namespace

This namespace contains operations for performing measurements beyond
the basic measurement operations available in the
[`Microsoft.Quantum.Intrinsic` namespace](xref:Microsoft.Quantum.Intrinsic).



## Description

To learn more about the different types of measurements, see the
[Single- and multi-qubit Pauli measurement operations](xref:microsoft.quantum.concepts.pauli)
article.
<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[MResetX](xref:Microsoft.Quantum.Measurement.MResetX) |Measures a single qubit in the X basis, and resets it to a fixed initial state following the measurement. |
|[MResetY](xref:Microsoft.Quantum.Measurement.MResetY) |Measures a single qubit in the Y basis, and resets it to a fixed initial state following the measurement. |
|[MResetZ](xref:Microsoft.Quantum.Measurement.MResetZ) |Measures a single qubit in the Z basis, and resets it to a fixed initial state following the measurement. |
|[MeasureAllZ](xref:Microsoft.Quantum.Measurement.MeasureAllZ) |Jointly measures a register of qubits in the Pauli Z basis. |
|[MeasurePaulis](xref:Microsoft.Quantum.Measurement.MeasurePaulis) |Given an array of multi-qubit Pauli operators, measures each using a specified measurement gadget, then returns the array of results. |
|[MeasureWithScratch](xref:Microsoft.Quantum.Measurement.MeasureWithScratch) |Measures the given Pauli operator using an explicit scratch qubit to perform the measurement. |
|[MultiM](xref:Microsoft.Quantum.Measurement.MultiM) |Measures each qubit in a given array in the standard basis. |
|[SetToBasisState](xref:Microsoft.Quantum.Measurement.SetToBasisState) |Sets a qubit to a given computational basis state by measuring the qubit and applying a bit flip if needed. |


<!-- /summaries -->
