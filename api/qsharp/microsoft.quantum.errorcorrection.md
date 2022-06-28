---
uid: Microsoft.Quantum.ErrorCorrection
title: Microsoft.Quantum.ErrorCorrection namespace
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.ErrorCorrection
qsharp.summary: >-
  This namespace contains functions, operations, and user-defined types for
  quantum error correction.
---

# Microsoft.Quantum.ErrorCorrection namespace

This namespace contains functions, operations, and user-defined types for
quantum error correction.



## Description

To learn more about this namespace, see
[Error Correction](xref:microsoft.quantum.libraries.overview.error-correction).
<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[DecodeFromBitFlipCode](xref:Microsoft.Quantum.ErrorCorrection.DecodeFromBitFlipCode) |Decodes from the [3, 1, 3] / ⟦3, 1, 1⟧ bit-flip code. |
|[DecodeFromFiveQubitCode](xref:Microsoft.Quantum.ErrorCorrection.DecodeFromFiveQubitCode) |Decodes the ⟦5, 1, 3⟧ quantum code. |
|[DecodeFromSteaneCode](xref:Microsoft.Quantum.ErrorCorrection.DecodeFromSteaneCode) |An inverse encoding operation that maps an unencoded quantum register to an encoded quantum register under the ⟦7, 1, 3⟧ Steane quantum code. |
|[EncodeIntoBitFlipCode](xref:Microsoft.Quantum.ErrorCorrection.EncodeIntoBitFlipCode) |Encodes into the [3, 1, 3] / ⟦3, 1, 1⟧ bit-flip code. |
|[EncodeIntoFiveQubitCode](xref:Microsoft.Quantum.ErrorCorrection.EncodeIntoFiveQubitCode) |Encodes into the ⟦5, 1, 3⟧ quantum code. |
|[EncodeIntoSteaneCode](xref:Microsoft.Quantum.ErrorCorrection.EncodeIntoSteaneCode) |An encoding operation that maps an unencoded quantum register to an encoded quantum register under the ⟦7, 1, 3⟧ Steane quantum code. |
|[FiveQubitCodeEncoderImpl](xref:Microsoft.Quantum.ErrorCorrection.FiveQubitCodeEncoderImpl) |Private operation used to implement both the 5 qubit encoder and decoder. |
|[InjectPi4YRotation](xref:Microsoft.Quantum.ErrorCorrection.InjectPi4YRotation) |Rotates a single qubit by π/4 about the Y-axis. |
|[KnillDistill](xref:Microsoft.Quantum.ErrorCorrection.KnillDistill) |Implements the Knill magic state distillation algorithm. |
|[MeasureStabilizerGenerators](xref:Microsoft.Quantum.ErrorCorrection.MeasureStabilizerGenerators) |Measures the given set of generators of a stabilizer group. |
|[Recover](xref:Microsoft.Quantum.ErrorCorrection.Recover) |Performs a single round of error correction by a quantum code described by a `QECC` type. |
|[RecoverCSS](xref:Microsoft.Quantum.ErrorCorrection.RecoverCSS) |Performs a single round of error correction by a quantum code described by a `CSS` type. |
|[SteaneCodeEncoderImpl](xref:Microsoft.Quantum.ErrorCorrection.SteaneCodeEncoderImpl) |Private operation used to implement both the Steane code encoder and decoder. |
|[_ExtractLogicalQubitFromSteaneCode](xref:Microsoft.Quantum.ErrorCorrection._ExtractLogicalQubitFromSteaneCode) |Syndrome measurement and the inverse of embedding. |

## Functions

| Name | Summary |
|------|---------|
|[BitFlipCode](xref:Microsoft.Quantum.ErrorCorrection.BitFlipCode) |Returns a QECC value representing the ⟦3, 1, 1⟧ bit flip code encoder and decoder with in-place syndrome measurement. |
|[BitFlipRecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.BitFlipRecoveryFn) |Function for recovery Pauli operations for given syndrome measurement by table lookup for the ⟦3, 1, 1⟧ bit flip code. |
|[FiveQubitCode](xref:Microsoft.Quantum.ErrorCorrection.FiveQubitCode) |Returns a QECC value representing the ⟦5, 1, 3⟧ code encoder and decoder with in-place syndrome measurement. |
|[FiveQubitCodeRecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.FiveQubitCodeRecoveryFn) |Returns function that maps error syndrome measurements to the appropriate error-correcting Pauli operators by table lookup for the ⟦5, 1, 3⟧ quantum code. |
|[SteaneCode](xref:Microsoft.Quantum.ErrorCorrection.SteaneCode) |Returns a CSS value representing the ⟦7, 1, 3⟧ Steane code encoder and decoder with in-place syndrome measurement. |
|[SteaneCodeRecoveryFns](xref:Microsoft.Quantum.ErrorCorrection.SteaneCodeRecoveryFns) |Decoder for combined X- and Z-parts of the stabilizer group of the ⟦7, 1, 3⟧ Steane quantum code. |
|[SteaneCodeRecoveryX](xref:Microsoft.Quantum.ErrorCorrection.SteaneCodeRecoveryX) |Decoder for the X-part of the stabilizer group of the ⟦7, 1, 3⟧ Steane quantum code. |
|[SteaneCodeRecoveryZ](xref:Microsoft.Quantum.ErrorCorrection.SteaneCodeRecoveryZ) |Decoder for the Z-part of the stabilizer group of the ⟦7, 1, 3⟧ Steane quantum code. |
|[TableLookupRecovery](xref:Microsoft.Quantum.ErrorCorrection.TableLookupRecovery) |For a given table of Pauli operations on a given register of qubits, this function returns an object of type `RecoveryFn` which contains all information needed to perform a table-lookup decoding with respect to the given array of Pauli operations. |
|[TableLookupRecoveryImpl](xref:Microsoft.Quantum.ErrorCorrection.TableLookupRecoveryImpl) | |

## User-defined types

| Name | Summary |
|------|---------|
|[CSS](xref:Microsoft.Quantum.ErrorCorrection.CSS) |Represents a Calderbank–Shor–Steane (CSS) code as defined by its encoder, decoder, and its syndrome measurement procedures for `X` and `Z` errors, respectively. |
|[DecodeOp](xref:Microsoft.Quantum.ErrorCorrection.DecodeOp) |Represents an operation which decodes an encoded register into a physical register and the scratch qubits used to record a syndrome. |
|[EncodeOp](xref:Microsoft.Quantum.ErrorCorrection.EncodeOp) |Represents an operation which encodes a physical register into a logical register, using the provided scratch qubits. |
|[LogicalRegister](xref:Microsoft.Quantum.ErrorCorrection.LogicalRegister) |Type for register of physical qubits `Qubit[]` that encode the logical qubits. |
|[QECC](xref:Microsoft.Quantum.ErrorCorrection.QECC) |Represents an error-correcting code as defined by its encoder, decoder, and syndrome measurement procedure. |
|[RecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.RecoveryFn) |Type for function that maps an error syndrome to a sequence of `Pauli[]` operations that correct the detected error. |
|[Syndrome](xref:Microsoft.Quantum.ErrorCorrection.Syndrome) |Type for measurement results `Result[]` that specify an error syndrome of a quantum code. |
|[SyndromeMeasOp](xref:Microsoft.Quantum.ErrorCorrection.SyndromeMeasOp) |Represents an operation that is used to measure the syndrome of an error-correcting code block. |
<!-- /summaries -->
