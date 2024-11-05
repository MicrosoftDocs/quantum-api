---
uid: qdk.std.diagnostics-toc
title: Std.Diagnostics namespace
description: Table of contents for the Q# Diagnostics namespace
author: bradben
ms.author: brbenefield
ms.date: 11/04/2024
ms.topic: landing-page
---

# Std.Diagnostics

The Std.Diagnostics namespace contains the following functions and operations:

| Name | Description |
|------|-------------|
| [CheckAllZero](xref:Qdk.Std.Diagnostics.CheckAllZero) | Checks whether all qubits in the provided array are in the $\|0⟩$ state. Returns true if they are.  |
| [CheckOperationsAreEqual](xref:Qdk.Std.Diagnostics.CheckOperationsAreEqual) | Given two operations, checks that they act identically for all input states.  |
| [CheckZero](xref:Qdk.Std.Diagnostics.CheckZero) | Checks whether a qubit is in the $\|0⟩$ state, returning true if it is.  |
| [DumpMachine](xref:Qdk.Std.Diagnostics.DumpMachine) | Dumps the current target machine's status.  |
| [DumpOperation](xref:Qdk.Std.Diagnostics.DumpOperation) | Given an operation, dumps the matrix representation of the operation action on the given number of qubits.  |
| [DumpRegister](xref:Qdk.Std.Diagnostics.DumpRegister) | Dumps the current target machine's status associated with the given qubits.  |
| [Fact](xref:Qdk.Std.Diagnostics.Fact) | Checks whether a given condition is true, failing with a message if it is not.  |
| [StartCountingFunction](xref:Qdk.Std.Diagnostics.StartCountingFunction) | Starts counting the number of times the given function is called. Fails if the function is already being counted.  |
| [StartCountingOperation](xref:Qdk.Std.Diagnostics.StartCountingOperation) | Starts counting the number of times the given operation is called. Fails if the operation is already being counted.  |
| [StartCountingQubits](xref:Qdk.Std.Diagnostics.StartCountingQubits) | Starts counting the number of qubits allocated. Fails if qubits are already being counted.  |
| [StopCountingFunction](xref:Qdk.Std.Diagnostics.StopCountingFunction) | Stops counting the number of times the given function is called and returns the count. Fails if the function was not being counted.  |
| [StopCountingOperation](xref:Qdk.Std.Diagnostics.StopCountingOperation) | Stops counting the number of times the given operation is called and returns the count. Fails if the operation was not being counted.  |
| [StopCountingQubits](xref:Qdk.Std.Diagnostics.StopCountingQubits) | Stops counting the number of qubits allocated and returns the count. Fails if the qubits were not being counted.  |
