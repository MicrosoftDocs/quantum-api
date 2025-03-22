---
uid: Qdk.Std.Diagnostics-toc
title: Std.Diagnostics namespace
description: Table of contents for the Q# Diagnostics namespace
author: azure-quantum-content
ms.author: quantumdocwriters
ms.date: 01/24/2025
ms.topic: landing-page
---

# Std.Diagnostics

The Std.Diagnostics namespace contains the following items:

| Name | Description |
|------|-------------|
| [ApplyIdleNoise](xref:Qdk.Std.Diagnostics.ApplyIdleNoise) | Applies configured noise to a qubit. |
| [BitFlipNoise](xref:Qdk.Std.Diagnostics.BitFlipNoise) | The bit flip noise with probability `p`. |
| [CheckAllZero](xref:Qdk.Std.Diagnostics.CheckAllZero) | Checks whether all qubits in the provided array are in the \|0⟩ state. Returns true if they are. |
| [CheckOperationsAreEqual](xref:Qdk.Std.Diagnostics.CheckOperationsAreEqual) | Given two operations, checks that they act identically for all input states. |
| [CheckZero](xref:Qdk.Std.Diagnostics.CheckZero) | Checks whether a qubit is in the \|0⟩ state, returning true if it is. |
| [ConfigurePauliNoise](xref:Qdk.Std.Diagnostics.ConfigurePauliNoise) | Configures Pauli noise for simulation. |
| [DepolarizingNoise](xref:Qdk.Std.Diagnostics.DepolarizingNoise) | The depolarizing noise with probability `p`. |
| [DumpMachine](xref:Qdk.Std.Diagnostics.DumpMachine) | Dumps the current target machine's status. |
| [DumpOperation](xref:Qdk.Std.Diagnostics.DumpOperation) | Given an operation, dumps the matrix representation of the operation action on the given number of qubits. |
| [DumpRegister](xref:Qdk.Std.Diagnostics.DumpRegister) | Dumps the current target machine's status associated with the given qubits. |
| [Fact](xref:Qdk.Std.Diagnostics.Fact) | Checks whether a given condition is true, failing with a message if it is not. |
| [NoNoise](xref:Qdk.Std.Diagnostics.NoNoise) | No noise for noiseless operation. |
| [PhaseFlipNoise](xref:Qdk.Std.Diagnostics.PhaseFlipNoise) | The phase flip noise with probability `p`. |
| [StartCountingFunction](xref:Qdk.Std.Diagnostics.StartCountingFunction) | Starts counting the number of times the given function is called. Fails if the function is already being counted. |
| [StartCountingOperation](xref:Qdk.Std.Diagnostics.StartCountingOperation) | Starts counting the number of times the given operation is called. Fails if the operation is already being counted. |
| [StartCountingQubits](xref:Qdk.Std.Diagnostics.StartCountingQubits) | Starts counting the number of qubits allocated. Fails if qubits are already being counted. |
| [StopCountingFunction](xref:Qdk.Std.Diagnostics.StopCountingFunction) | Stops counting the number of times the given function is called and returns the count. Fails if the function was not being counted. |
| [StopCountingOperation](xref:Qdk.Std.Diagnostics.StopCountingOperation) | Stops counting the number of times the given operation is called and returns the count. Fails if the operation was not being counted. |
| [StopCountingQubits](xref:Qdk.Std.Diagnostics.StopCountingQubits) | Stops counting the number of qubits allocated and returns the count. Fails if the qubits were not being counted. |
