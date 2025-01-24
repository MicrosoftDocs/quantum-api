---
uid: Qdk.Std.Intrinsic-toc
title: Std.Intrinsic namespace
description: Table of contents for the Q# Intrinsic namespace
author: bradben
ms.author: brbenefield
ms.date: 01/24/2025
ms.topic: landing-page
---

# Std.Intrinsic

The Std.Intrinsic namespace contains the following items:

| Name | Description |
|------|-------------|
| [AND](xref:Qdk.Std.Intrinsic.AND) | Applies the AND gate that is more efficient for use with decomposition of multi-controlled operations. Note that target qubit must be in \|0⟩ state. |
| [ApplyUnitary](xref:Qdk.Std.Intrinsic.ApplyUnitary) | Applies the given unitary matrix to the given qubits. The matrix is checked at runtime to ensure it's shape is square and that the matrix dimensions are `2 ^ Length(qubits)`. This operation is simulator-only and is not supported on hardware. |
| [CCNOT](xref:Qdk.Std.Intrinsic.CCNOT) | Applies the doubly controlled–NOT (CCNOT) gate to three qubits. |
| [CNOT](xref:Qdk.Std.Intrinsic.CNOT) | Applies the controlled-NOT (CNOT) gate to a pair of qubits. |
| [Exp](xref:Qdk.Std.Intrinsic.Exp) | Applies the exponential of a multi-qubit Pauli operator. |
| [H](xref:Qdk.Std.Intrinsic.H) | Applies the Hadamard transformation to a single qubit. |
| [I](xref:Qdk.Std.Intrinsic.I) | Performs the identity operation (no-op) on a single qubit. |
| [M](xref:Qdk.Std.Intrinsic.M) | Performs a measurement of a single qubit in the Pauli _Z_ basis. |
| [Measure](xref:Qdk.Std.Intrinsic.Measure) | Performs a joint measurement of one or more qubits in the specified Pauli bases.  If the basis array and qubit array are different lengths, then the operation will fail. |
| [Message](xref:Qdk.Std.Intrinsic.Message) | Logs a message. |
| [R](xref:Qdk.Std.Intrinsic.R) | Applies a rotation about the given Pauli axis. |
| [R1](xref:Qdk.Std.Intrinsic.R1) | Applies a rotation about the \|1⟩ state by a given angle. |
| [R1Frac](xref:Qdk.Std.Intrinsic.R1Frac) | Applies a rotation about the \|1⟩ state by an angle specified as a dyadic fraction.  WARNING: This operation uses the **opposite** sign convention from Std.Intrinsic.R. |
| [RFrac](xref:Qdk.Std.Intrinsic.RFrac) | Applies a rotation about the given Pauli axis by an angle specified as a dyadic fraction.  WARNING: This operation uses the **opposite** sign convention from Std.Intrinsic.R. |
| [Reset](xref:Qdk.Std.Intrinsic.Reset) | Given a single qubit, measures it and ensures it is in the \|0⟩ state such that it can be safely released. |
| [ResetAll](xref:Qdk.Std.Intrinsic.ResetAll) | Given an array of qubits, measure them and ensure they are in the \|0⟩ state such that they can be safely released. |
| [Rx](xref:Qdk.Std.Intrinsic.Rx) | Applies a rotation about the _x_-axis by a given angle. |
| [Rxx](xref:Qdk.Std.Intrinsic.Rxx) | Applies the two qubit Ising _XX_ rotation gate. |
| [Ry](xref:Qdk.Std.Intrinsic.Ry) | Applies a rotation about the _y_-axis by a given angle. |
| [Ryy](xref:Qdk.Std.Intrinsic.Ryy) | Applies the two qubit Ising _YY_ rotation gate. |
| [Rz](xref:Qdk.Std.Intrinsic.Rz) | Applies a rotation about the _z_-axis by a given angle. |
| [Rzz](xref:Qdk.Std.Intrinsic.Rzz) | Applies the two qubit Ising _ZZ_ rotation gate. |
| [S](xref:Qdk.Std.Intrinsic.S) | Applies the π/4 phase gate to a single qubit. |
| [SWAP](xref:Qdk.Std.Intrinsic.SWAP) | Applies the SWAP gate to a pair of qubits. |
| [T](xref:Qdk.Std.Intrinsic.T) | Applies the π/8 gate to a single qubit. |
| [X](xref:Qdk.Std.Intrinsic.X) | Applies the Pauli _X_ gate. |
| [Y](xref:Qdk.Std.Intrinsic.Y) | Applies the Pauli _Y_ gate. |
| [Z](xref:Qdk.Std.Intrinsic.Z) | Applies the Pauli _Z_ gate. |
